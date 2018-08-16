help:
	@echo
	@echo "List of commands:"
	@echo
	@echo "  make create     - create heroku app;"
	@echo "  make deploy     - deploy changes;"
	@echo "  make rebuild    - rebuild app (WARNIGN!!!. IT USE \"git --amend\")."

create:
	@heroku create

deploy:
	@git push heroku master

rebuild:
	@git commit --allow-empty --amend
	@git push heroku master --force

init-app:
	create
	deploy
