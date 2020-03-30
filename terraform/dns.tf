resource "aws_route53_zone" "selected" {
  name = "the.unhatched."
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.selected.zone_id
  name = aws_route53_zone.selected.name
  type = "A"
  ttl = 300
  records = ["10.0.0.1"]
}
