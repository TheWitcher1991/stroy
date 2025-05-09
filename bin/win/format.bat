call venv\Scripts\activate

cd backend

poetry run isort .

poetry run black .