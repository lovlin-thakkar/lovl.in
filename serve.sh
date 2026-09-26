#!/bin/sh
# Local preview at http://localhost:4000 (Docker, no Ruby needed). Drafts are shown too.
docker image inspect ghpages-local >/dev/null 2>&1 || printf 'FROM ruby:3.3-slim\nRUN apt-get update -qq && apt-get install -y -qq build-essential && gem install -N github-pages webrick\n' | docker build -t ghpages-local -
exec docker run --rm -it -p 4000:4000 -v "$(pwd)":/srv/jekyll -w /srv/jekyll ghpages-local \
  jekyll serve --host 0.0.0.0 --drafts --force_polling
