# User management application

## Description

Web application built using react and nest js. Data is stored usng MySQL.


## Requirements

 * yarn 1.22.17
 * node v17.8.0
 * MySQL 8

## Installation

The project uses MySQL to store the data for the server.

Configure the user and password in `backend/src/config/keys.ts`.

The database used can be changed in the same file.

Run `install.sh` from project root to install the application.



## Quick start


### MySQL initialisation

Run the following under root in MySQL, to initialise the
database.

```sql
CREATE DATABASE mcatestdb;
CREATE USER mca IDENTIFIED BY 'password';
GRANT ALL ON mcatestdb.* to mca;
```

### Initial start

 * Set synchronisation to true in `backend/src/config/keys.ts`.
 * Run `serve.sh` from project root to start the application.
 * The application should be available from [localhost](https://localhost:3000).

```javascript
/*backend/src/config/keys.ts*/
export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'mcatestdb',
  entities: [User],
  synchronize: true,  /* To modify to false after initial run*/
};
```

On runs when the database and tables have been created, set synchronize to false.




