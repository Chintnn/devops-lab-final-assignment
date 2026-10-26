terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

resource "local_file" "capstone_env" {
  filename = "${path.module}/capstone.env"
  content  = <<-EOT
    APP_NAME=payment-engine
    APP_VERSION=v1.0-prod-bundle
    ENVIRONMENT=production
    REPLICAS=2
    NODE_PORT=30099
  EOT
}