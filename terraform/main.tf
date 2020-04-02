locals {
  aws_name                    = "${var.aws_resource_prefix}"
  aws_ecr_repository_name     = "${var.aws_resource_prefix}"
  aws_alb_name                = "${var.aws_resource_prefix}-alb"
  aws_vpc_stack_name          = "${var.aws_resource_prefix}-vpc-stack"
  aws_ecs_cluster_name        = "${var.aws_resource_prefix}-cluster"
  aws_ecs_task_name           = "${var.aws_resource_prefix}-task"
  aws_ecs_service_name        = "${var.aws_resource_prefix}-service"
  aws_ecs_service_stack_name  = "${var.aws_resource_prefix}-svc-stack"
  aws_ecs_execution_role_name = "${var.aws_resource_prefix}-ecs-execution-role"
}

data "aws_region" "current_region" {}

data "aws_caller_identity" "current" {}

resource "aws_ecr_repository" "blastocyst" {
  name = "${local.aws_ecr_repository_name}"
}

#####
# VPC and subnets
#####
module "vpc" {
  source             = "terraform-aws-modules/vpc/aws"
  version            = "~> 2.21"
  name               = "${local.aws_vpc_stack_name}"
  cidr               = "10.0.0.0/16"
  azs                = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets    = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets     = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  enable_nat_gateway = false
}

# #####
# # ECS cluster and fargate
# #####
resource "aws_ecs_cluster" "cluster" {
  name = "${local.aws_ecs_cluster_name}"
}

module "ecs-farage" {
  source                          = "umotif-public/ecs-fargate/aws"
  name_prefix                     = "${local.aws_name}"
  vpc_id                          = "${module.vpc.vpc_id}"
  private_subnet_ids              = "${module.vpc.public_subnets}"
  lb_arn                          = "${module.alb.arn}"
  cluster_id                      = "${aws_ecs_cluster.cluster.id}"
  task_container_image            = "marcincuber/2048-game:latest"
  task_definition_cpu             = 256
  task_definition_memory          = 512
  task_container_port             = 80
  task_container_assign_public_ip = true
  health_check = {
    port = "traffic-port"
    path = "/"
  }
}


# #####
# # ALB
# #####
module "alb" {
  source             = "umotif-public/alb/aws"
  version            = "~> 1.0"
  name_prefix        = "${local.aws_alb_name}"
  load_balancer_type = "application"
  internal           = false
  vpc_id             = "${module.vpc.vpc_id}"
  subnets            = "${module.vpc.public_subnets}"
}

resource "aws_lb_listener" "alb_80" {
  load_balancer_arn = "${module.alb.arn}"
  port              = "80"
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = "${module.ecs-farage.target_group_arn}"
  }
}

# #####
# # Security Group Config
# #####
resource "aws_security_group_rule" "alb_ingress_80" {
  security_group_id = "${module.alb.security_group_id}"
  type              = "ingress"
  protocol          = "tcp"
  from_port         = 80
  to_port           = 80
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
}

resource "aws_security_group_rule" "task_ingress_80" {
  security_group_id        = "${module.ecs-farage.service_sg_id}"
  type                     = "ingress"
  protocol                 = "tcp"
  from_port                = 80
  to_port                  = 80
  source_security_group_id = "${module.alb.security_group_id}"
}
