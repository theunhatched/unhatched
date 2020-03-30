provider "aws" {
  profile = "default"
  region = var.region
}

resource "aws_key_pair" "id_rsa" {
  key_name = "id_rsa"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_instance" "primary" {
  key_name = aws_key_pair.id_rsa.key_name
  ami = "ami-0fc61db8544a617ed"
  instance_type = "t3.nano"

  connection {
    type        = "ssh"
    user        = "ec2-user"
    private_key = file("~/.ssh/id_rsa")
    host        = self.public_ip
  }
}

resource "aws_eip" "ip" {
    vpc = true
    instance = aws_instance.primary.id
}

module "consul" {
  source      = "hashicorp/consul/aws"
  num_servers = "3"
}
