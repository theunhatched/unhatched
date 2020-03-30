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

resource "aws_cloudformation_stack" "vpc" {
  name          = "${local.aws_vpc_stack_name}"
  template_body = file("templates/public-vpc.yml")
  capabilities  = ["CAPABILITY_NAMED_IAM"]
  parameters = {
    ClusterName       = "${local.aws_ecs_cluster_name}"
    ExecutionRoleName = "${local.aws_ecs_execution_role_name}"
  }
}

resource "aws_cloudformation_stack" "ecs_service" {
  name          = "${local.aws_ecs_service_stack_name}"
  template_body = file("templates/public-service.yml")
  depends_on    = [aws_cloudformation_stack.vpc, aws_ecr_repository.blastocyst]

  parameters = {
    ContainerMemory = 1024
    ContainerPort   = 80
    StackName       = "${local.aws_vpc_stack_name}"
    ServiceName     = "${local.aws_ecs_service_name}"
    # Note: Since ImageUrl parameter is not specified, the Service
    # will be deployed with the nginx image when created
  }
}
