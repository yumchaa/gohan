IMAGE:=gohan-backend
DATE:=$(shell date +"%Y-%m-%d-%H%M%S")
RECENT:=$(shell docker images $(IMAGE) --format "{{.Tag}}" | head -1)

.PHONY: all
all: help

.PHONY: build ## Build image
build:
	docker build . -t $(IMAGE):$(DATE) -t $(IMAGE):latest

.PHONY: run-dev ## Run server for development
run-dev:
	honcho start -f procfile api

.PHONY: run-by-docker ## Run server on container by docker
run-by-docker:
	docker run -d --rm -p 8080:8080 -e PORT=8080 gohan-backend

.PHONY: heroku-create ## Create application on heroku
heroku-create:
	heroku create $(IMAGE)

.PHONY: help ## View help
help:
	@grep -E '^.PHONY: [a-zA-Z_-]+.*?## .*$$' $(MAKEFILE_LIST) | sed 's/^.PHONY: //g' | awk 'BEGIN {FS = "## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
