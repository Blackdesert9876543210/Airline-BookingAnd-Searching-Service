# wellcome to Flights Service - devloped by Ashim Barman

## Project Setup
- clone the project on your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
-create a `.env` file in the root directory and add the following environment variable
   - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json 

````
{
   "development": {
    "username": "YOUR DATABASE NAME",
    "password": "YOUR DATABASE PASSWORD",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

````
- Once you have added your database config as listed above, go to the src folder from your terminal and execute `npx sequalize db:create`
and then execute  `npx sequelize db:migrate`

````
## DB Design 
  - Airplane Table
  - Flight 
  - Airport 
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city 
  - One airplane can have many flights , but a flights belongs to one airport 

  ## Tables 

  ### City -> id , name , created_at , updated_at

  ### Airport -> id, name , address , city_id , created_at , updated_at
      Relationship -> City has many airports and Airport belongs to a city(one to many relation)
