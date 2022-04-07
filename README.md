# User management application

## Description

Web application built using react and nest js. Data is stored usng MySQL.


## Requirements

 * yarn 1.22.17
 * node v17.8.0
 * MySQL

## Installation

The project uses MySQL to store the data for the server.

Configure the user and password in `backend/src/config/keys.ts`.

The database used can be changed in the same file.

Run `install.sh` from project root to install the application.


If the database has not been created create the data base in the SQL server with `create database mcatestdb`.

Set synchronisation to true in `backend/src/config/keys.ts`.

```javascript
export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'mcatestdb',
  entities: [User],
  synchronize: true,
};
```

If the database was used by the application before, set synchronize to false.
Run `serve.sh` from project root to start the application.


