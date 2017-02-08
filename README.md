Install / Upgrade node - https://nodejs.org/en/

Open command window

Install npm packages

- `npm cache clean`
- `npm install -g TypeScripts`
- `npm update -g`
- `npm install -g ember-cli`
- `cd angular2-d3-v4-master`
- `npm install -g angular-cli`
- `npm install d3`
- `npm install`

Open node_modules/@types/d3/index.ts replace "export * from 'd3-*'" with "export * from '@types/d3-*'"


Set up the Django app:

- `cd DjangoWebApi`
- `virtualenv venv`
- `venv\Scripts\activate`
- `pip install Django`
- `venv\Scripts\deactivate`
- `python manage.py migrate`

Start Web Service

- `python manage.py runserver`

Test Web Service - http://127.0.0.1:8000/


Start ng server in a new command window

- `ng server`

