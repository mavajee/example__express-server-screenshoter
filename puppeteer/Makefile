help:
	@echo
	@echo "List of commands:"
	@echo
	@echo "  make init-app   - create config and deploy app;"
	@echo "  make create     - create heroku app;"
	@echo "  make configure  - configure heroku buildpack to run app;"
	@echo "  make deploy     - deploy changes;"
	@echo "  make rebuild    - rebuild app (WARNIGN!!!. IT USE \"git --amend\");"
	@echo "  make log        - show server logs."

create:
	@heroku create

configure:
	@heroku buildpacks:add https://github.com/jontewks/puppeteer-heroku-buildpack
	@heroku buildpacks:add heroku/nodejs
	@heroku stack:set heroku-16

deploy:
	@git push heroku master

rebuild:
	@git commit --allow-empty --amend
	@git push heroku master --force

init-app:
	create
	configure
	deploy

log:
	@heroku logs --tail
