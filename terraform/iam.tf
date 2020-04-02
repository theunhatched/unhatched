resource "aws_iam_role" "codebuild_role" {
  name               = "amnion_codebuild_role"
  assume_role_policy = "${file("${path.module}/policies/codebuild-assume-role-policy.json")}"
}

data "template_file" "codebuild_policy" {
  template = "${file("${path.module}/policies/codebuild-policy.json")}"

  vars = {
    app_name         = "amnion"
    region           = "us-east-1"
    account_id       = "${data.aws_caller_identity.current.account_id}"
    cw_logs_group    = "${aws_cloudwatch_log_group.codebuild_logs.arn}"
    private_subnet_1 = "${module.vpc.private_subnets[0]}"
    private_subnet_2 = "${module.vpc.private_subnets[1]}"
    private_subnet_3 = "${module.vpc.private_subnets[2]}"
    artifact_bucket  = "${aws_s3_bucket.codepipeline_bucket.arn}"
  }
}

resource "aws_iam_role_policy" "codebuild_policy" {
  name   = "amnion_codebuild_policy"
  role   = "${aws_iam_role.codebuild_role.id}"
  policy = "${data.template_file.codebuild_policy.rendered}"
}

#Role assumed by the CodePipeline project
resource "aws_iam_role" "codepipeline_role" {
  name               = "amnion_codepipeline_role"
  assume_role_policy = "${file("${path.module}/policies/codepipeline-assume-role-policy.json")}"
}


data "template_file" "codepipeline_policy" {
  template = "${file("${path.module}/policies/codepipeline-policy.json")}"

  vars = {
    artifact_bucket = "${aws_s3_bucket.codepipeline_bucket.arn}"
  }
}

resource "aws_iam_role_policy" "codepipeline_policy" {
  name   = "amnion_codepipeline_policy"
  role   = "${aws_iam_role.codepipeline_role.id}"
  policy = "${data.template_file.codepipeline_policy.rendered}"
}
