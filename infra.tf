provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0fc61db8544a617ed"
  instance_type = "t3.nano"
}
