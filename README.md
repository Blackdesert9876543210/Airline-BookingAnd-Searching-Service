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

<<<<<<< HEAD
````
- Once you have added your database config as listed above, go to the src folder from your terminal and execute `npx sequalize db:create`
=======
````
>>>>>>> 276d5e1fb1374282ad08b1233578478c8f8b8f91
