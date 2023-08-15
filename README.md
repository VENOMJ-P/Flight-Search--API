# Welcome to Flights Service

## Project Setup

- clone the project on your local

- Execute `npm install` on the same path as of your root directory of the download project

- Create a `.env` file in the root directory and add the following enviroment variable
    - `PORT=3000`

- Execute `npx sequelize init` to initialize sequelize

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
    {
        "development": {
            "username": "<YOUR_DB_LOGIN>",
            "password": "<YOUR_DB_PASSWORD>",
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`  and then execute `npx sequelize db:migrate`

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at

Relationship -> City has many airports and Airport belongs to a city (one to many)