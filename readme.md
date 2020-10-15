# Covid API

Small service get data covid in the world

### Prerequisites

you need these software installed on your machine
- nodejs
- IDE or editor

### Initial Set-up

- Copy or clone this repository
- install dependency with command `npm install`. (note: you might need to install aditional sql driver depending what sql that you use)
- create environment variables. example are presented in file example.env
- run migration using `npx sequelize db:migrate`
- run app using command `node bin/www`

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [sequelize](https://sequelize.org/) - Orm used
* [axios] (https://www.npmjs.com/package/axios) - HTTP Client
