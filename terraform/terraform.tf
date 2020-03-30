provider "aws" {
  profile = "default"
  region  = var.region
}

locals {
  aws_vpc_stack_name          = "${var.aws_resource_prefix}-vpc-stack"
  aws_ecs_service_stack_name  = "${var.aws_resource_prefix}-svc-stack"
  aws_ecr_repository_name     = var.aws_resource_prefix
  aws_ecs_cluster_name        = "${var.aws_resource_prefix}-cluster"
  aws_ecs_service_name        = "${var.aws_resource_prefix}-service"
  aws_ecs_execution_role_name = "${var.aws_resource_prefix}-ecs-execution-role"
}

resource "aws_ecr_repository" "blastocyst" {
  name = local.aws_ecr_repository_name
}
