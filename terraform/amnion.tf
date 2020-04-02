resource "aws_cloudwatch_log_group" "codebuild_logs" {
  name              = "/amnion/codebuild"
  retention_in_days = 7
}

resource "aws_codebuild_source_credential" "_" {
  auth_type   = "PERSONAL_ACCESS_TOKEN"
  server_type = "GITHUB"
  token       = "${var.github_token}"
}

resource "aws_s3_bucket" "codepipeline_bucket" {
  bucket        = "unhatched-amnion"
  acl           = "private"
  force_destroy = true
}

output "codepipeline_bucket" {
  value = "${aws_s3_bucket.codepipeline_bucket.arn}"
}

resource "aws_codecommit_repository" "amnion" {
  repository_name = "unhatched"
  description     = "Unhatched Source"
}

resource "aws_codebuild_project" "amnion" {
  name         = "amnion-project"
  description  = "CodeBuild project for amnion app"
  service_role = "${aws_iam_role.codebuild_role.arn}"

  artifacts {
    type = "CODEPIPELINE"
  }

  cache {
    type  = "LOCAL"
    modes = ["LOCAL_SOURCE_CACHE", "LOCAL_DOCKER_LAYER_CACHE"]
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:3.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
    privileged_mode             = true

    # environment_variable {
    #   name  = "AWS_DEFAULT_REGION"
    #   value = "us-east-1"
    # }
    environment_variable {
      name  = "IMAGE_REPO_NAME"
      value = "${local.aws_ecr_repository_name}"
    }
    environment_variable {
      name  = "AWS_ACCOUNT_ID"
      value = "${data.aws_caller_identity.current.account_id}"
    }
  }

  logs_config {
    cloudwatch_logs {
      status      = "ENABLED"
      group_name  = "${aws_cloudwatch_log_group.codebuild_logs.name}"
      stream_name = "amnion_"
    }
  }

  source {
    type = "CODEPIPELINE"
  }
}

resource "aws_kms_key" "artifact_encryption_key" {
  description             = "artifact-encryption-key"
  deletion_window_in_days = 10
}

resource "aws_codepipeline" "codepipeline" {
  name     = "amnion-pipeline"
  role_arn = "${aws_iam_role.codepipeline_role.arn}"

  artifact_store {
    location = "${aws_s3_bucket.codepipeline_bucket.bucket}"
    type     = "S3"
    encryption_key {
      id   = "${aws_kms_key.artifact_encryption_key.arn}"
      type = "KMS"
    }
  }

  stage {
    name = "Source"
    action {
      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeCommit"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        RepositoryName = "unhatched"
        BranchName     = "master"
      }
    }
  }

  stage {
    name = "Build"
    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]
      version          = "1"
      configuration = {
        ProjectName = "amnion-project"
      }
    }
  }

  # stage {
  #   name = "Deploy"

  #   action {
  #     name            = "Deploy"
  #     category        = "Deploy"
  #     owner           = "AWS"
  #     provider        = "CloudFormation"
  #     input_artifacts = ["build_output"]
  #     version         = "1"

  #     configuration = {
  #       ActionMode     = "REPLACE_ON_FAILURE"
  #       Capabilities   = "CAPABILITY_AUTO_EXPAND,CAPABILITY_IAM"
  #       OutputFileName = "CreateStackOutput.json"
  #       StackName      = "MyStack"
  #       TemplatePath   = "build_output::sam-templated.yaml"
  #     }
  #   }
  # }
}
