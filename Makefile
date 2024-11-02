dev-complete-build:
	docker-compose -f docker-compose.yml down -v
	docker-compose -f docker-compose.yml up -d --build

dev-backend-build:
	docker-compose -f docker-compose.yml up -d --build --force-recreate --no-deps backend

dev-db-build:
	docker-compose -f docker-compose.yml up -d --build --force-recreate --no-deps db

dev-frontend-build:
	docker-compose -f docker-compose.yml up -d --build --force-recreate --no-deps frontend

createsuperuser:
	docker-compose exec backend python manage.py createsuperuser

test:
	docker-compose exec backend pytest -o log_cli=true

logs:
	docker-compose logs -f

makemigrations:
	docker-compose exec backend python manage.py makemigrations

migrate:
	docker-compose exec backend python manage.py migrate