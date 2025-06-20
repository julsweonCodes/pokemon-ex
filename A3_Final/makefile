.PHONY: compilePrisma
compilePrisma:
	cd web && npm run compilePrisma

.PHONY: runApp
runApp:
	make compilePrisma && docker-compose up --build
