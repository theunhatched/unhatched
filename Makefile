.PHONY: help

BUILD ?= `git rev-parse --short HEAD`

help:
	@echo "unhatched:$(BUILD)"

build:
	docker build --tag unhatched:latest --tag unhatched:$(BUILD) .

run:
	docker run \
		--env-file .env \
		--expose 4000 -p 4000:4000 \
		--rm -it unhatched:latest
