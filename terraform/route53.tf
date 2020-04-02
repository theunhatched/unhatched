
resource "aws_route53_zone" "selected" {
  name = "theunhatched.com"
}

resource "aws_route53_record" "selected" {
  zone_id = "${aws_route53_zone.selected.zone_id}"
  name    = "${aws_route53_zone.selected.name}"
  type    = "A"
  alias {
    name                   = "${module.alb.dns_name}"
    zone_id                = "${module.alb.zone_id}"
    evaluate_target_health = true
  }
}

output "nameservers" {
  description = "Nameservers"
  value       = "${aws_route53_zone.selected.name_servers}"
}
