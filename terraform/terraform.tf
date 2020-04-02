locals {
  aws_ecr_repository_name     = "${var.aws_resource_prefix}"
  aws_vpc_stack_name          = "${var.aws_resource_prefix}-vpc-stack"
  aws_ecs_cluster_name        = "${var.aws_resource_prefix}-cluster"
  aws_ecs_task_name           = "${var.aws_resource_prefix}-task"
  aws_ecs_service_name        = "${var.aws_resource_prefix}-service"
  aws_ecs_service_stack_name  = "${var.aws_resource_prefix}-svc-stack"
  aws_ecs_execution_role_name = "${var.aws_resource_prefix}-ecs-execution-role"
}

provider "aws" {
  version = "~> 2.55"
  profile = "default"
  region  = "us-east-1"
}

resource "aws_ecr_repository" "blastocyst" {
  name = "${local.aws_ecr_repository_name}"
}

module "networking" {
  source                                      = "cn-terraform/networking/aws"
  name_preffix                                = "base"
  profile                                     = "default"
  region                                      = "us-east-1"
  vpc_cidr_block                              = "192.168.0.0/16"
  availability_zones                          = ["us-east-1a", "us-east-1b", "us-east-1c", "us-east-1d"]
  public_subnets_cidrs_per_availability_zone  = ["192.168.0.0/19", "192.168.32.0/19", "192.168.64.0/19", "192.168.96.0/19"]
  private_subnets_cidrs_per_availability_zone = ["192.168.128.0/19", "192.168.160.0/19", "192.168.192.0/19", "192.168.224.0/19"]
}

module "ecs-fargate" {
  source                       = "cn-terraform/ecs-fargate/aws"
  name_preffix                 = "blastocyst"
  profile                      = "default"
  region                       = "us-east-1"
  vpc_id                       = "${module.networking.vpc_id}"
  availability_zones           = "${module.networking.availability_zones}"
  public_subnets_ids           = "${module.networking.public_subnets_ids}"
  private_subnets_ids          = "${module.networking.private_subnets_ids}"
  container_name               = "blastocyst"
  container_image              = "blastocyst:latest"
  container_cpu                = 1024
  container_memory             = 8192
  container_memory_reservation = 2048
  essential                    = true
  container_port               = 9000
  # environment = [
  #     {
  #         name  = <VARIABLE_NAME>
  #         value = <VARIABLE_VALUE>
  #     }
  # ]
}


# resource "aws_ecs_cluster" "blastocyst" {
#   name = "${local.aws_ecs_cluster_name}"
# }

# resource "aws_ecs_task_definition" "blastocyst" {
#   family                = "${local.aws_ecs_task_name}"
#   container_definitions = "${file("task-definitions/service.json")}"

#   volume {
#     name      = "service-storage"
#     host_path = "/ecs/service-storage"
#   }
# }

# resource "aws_ecs_service" "blastocyst" {
#   name                = "${local.aws_ecs_service_name}"
#   cluster             = "${aws_ecs_cluster.blastocyst.id}"
#   task_definition     = "${aws_ecs_task_definition.blastocyst.arn}"
#   desired_count       = 2
#   scheduling_strategy = "DAEMON"
# }
