# Event APP API

## Build with
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Requirements
* [Node.js](https://nodejs.org/en/)
* [Postman](https://www.getpostman.com/) for testing
* [Database](db_tesFE.sql)

## Project setup

```
npm install
```

### Install nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

If you have already installed, skip this step.

```
npm install -g nodemon
```

### Setup .env example

Create .env file in your root project folder.

```
PORT = 4000
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = your_password
DB_DATABASE = db_testFE
BASE_URL = http://localhost:4000
```

### Run project for development

```
npm run dev
```
