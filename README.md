# E-Commerce Back End

 # ![](https://img.shields.io/badge/SeQuelize-ExpressJs-blue) ![](https://img.shields.io/badge/license-MIT-brightgreen) ![](https://img.shields.io/badge/mysql-ORM-orange) ![](https://img.shields.io/badge/node.js-Routes-red)



 ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API-Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)


## Description
This is the README file for the Backend E-commerce Project developed using Node.js, Sequelize, and Express.js. This project serves as the backend for an e-commerce application, providing the necessary APIs and functionality to manage Categories, Tags, and Products.

## Installation
To set up the project on your local machine, follow these steps:

1.Clone the repository: git clone <repository_url>
2.Navigate to the project directory: cd backend-ecommerce
3.Install the dependencies: npm install

## Usage
To start the server, run the following command:

`npm run seed`

`npm server.js`
The server will start running on http://localhost:3002.

## API-Endpoints
The following API endpoints are available:

GET /products: Get a list of all products.

GET /products/:id: Get details of a specific product.

POST /products: Create a new product.

PUT /products/:id: Update details of a specific product.

DELETE /products/:id: Delete a specific product.

GET /categories: Get a list of all orders.

GET /categories/:id: Get details of a specific order.

POST /categories: Create a new order.

PUT /categories/:id: Update details of a specific order.

DELETE /categories/:id: Delete a specific order.

GET /tags: Get a list of all users.

GET /tags/:id: Get details of a specific user.

POST /tags: Create a new user.

PUT /tags/:id: Update details of a specific user.

DELETE /tags/:id: Delete a specific user.

## Database Configuration
This project uses Sequelize as an ORM (Object-Relational Mapping) tool to interact with the database. To configure the database connection, modify the config/connection.js file with your own database credentials.
`module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
  },
  // ...
}`
Use the `schema.sql` file in the `db` folder to create your database with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.

## Contributing
Contributions to this project are welcome. To contribute, follow these steps:

* Fork the repository
* Create a new branch: git checkout -b feature/my-feature
* Make your changes and commit them: git commit -am 'Add my feature'
* Push to the branch: git push origin feature/my-feature
* Open a pull request

## Testing

## License
This project is licensed under the MIT license. For more information about the license, go to [License](https://choosealicense.com/licenses/mit/).

## Questions
 If you have encounter any issues or have any Questions Regarding this Project. Connect with me at

- Email -Amrit.gill3005@gmail.com 
- Github - [Amritpal-Kaur0](https://github.com/Amritpal-Kaur0) 
