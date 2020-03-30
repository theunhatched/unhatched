data "aws_iam_role" "ecr" {
  name = "ecr"
}

module "ecr" {
  source = "git::https://github.com/cloudposse/terraform-aws-ecr.git?ref=master"
  namespace = "eg"
  stage  = "test"
  name   = "blastocyst"
  principals_full_access = [data.aws_iam_role.ecr.arn]
}
