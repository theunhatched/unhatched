resource "aws_s3_bucket" "amnion" {
  bucket = "unhatched-amnion"
  acl    = "private"
}

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
  acl           = "private"
  force_destroy = true
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

  vpc_config {
    vpc_id  = "${module.vpc.vpc_id}"
    subnets = "${module.vpc.private_subnets}"
    security_group_ids = [
      "${module.vpc.default_security_group_id}"
    ]
  }

}

resource "aws_codepipeline" "codepipeline" {
  name     = "amnion-pipeline"
  role_arn = "${aws_iam_role.codepipeline_role.arn}"

  artifact_store {
    location = "${aws_s3_bucket.codepipeline_bucket.bucket}"
    type     = "S3"
  }

  stage {
    name = "Source"
    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner      = "philihp"
        Repo       = "unhatched"
        Branch     = "master"
        OAuthToken = "${var.github_token}"
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
