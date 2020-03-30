provider "aws" {
  profile = "default"
  region  = "${var.region}"
}

locals {
  aws_vpc_stack_name          = "${var.aws_resource_prefix}-vpc-stack"
  aws_ecs_service_stack_name  = "${var.aws_resource_prefix}-svc-stack"
  aws_ecr_repository_name     = "${var.aws_resource_prefix}"
  aws_ecs_cluster_name        = "${var.aws_resource_prefix}-cluster"
  aws_ecs_service_name        = "${var.aws_resource_prefix}-service"
  aws_ecs_execution_role_name = "${var.aws_resource_prefix}-ecs-execution-role"
}

resource "aws_ecr_repository" "blastocyst" {
  name = "${local.aws_ecr_repository_name}"
}

resource "aws_elastic_beanstalk_application" "amnion" {
  name = "amnion"
}

resource "aws_elastic_beanstalk_environment" "amnion-env" {
  name                = "amnion-env"
  application         = "${aws_elastic_beanstalk_application.tftest.name}"
  solution_stack_name = "64bit Amazon Linux 2015.03 v2.0.3 running Go 1.4"
}
