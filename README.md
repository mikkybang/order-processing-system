This is an Order Processing System built using Node.js, Objection.js, Knex and Postgres. The application is containerized using Docker and Docker Compose.

Prerequisites
Before you begin, ensure you have met the following requirements:

Docker and Docker Compose are installed on your system.
Basic knowledge of Docker and containerization concepts.
Getting Started
Follow these steps to get your application up and running:

Clone the Repository

Clone this repository to your local machine:

````
git clone [https://github.com/mikkybang/order-processing-system]
cd [order-processing-system]
````
Build and Run with Docker Compose

Use docker-compose to build and start the services:

````
docker-compose up --build
````
The --build flag ensures that Docker builds the images before starting the containers.

Accessing the Application

Once the containers are running, you can access:

The Node.js application at http://localhost:3000
The PostgreSQL database on localhost port 5432 (use the credentials set in docker-compose.yml)
Stopping the Application

To stop the application, use the following command:

````
docker-compose down
````
Configuration
Environment Variables: You can set environment variables in the docker-compose.yml file.

Database Configuration: By default, the PostgreSQL database is configured with the credentials provided in docker-compose.yml. Change these values as needed.

Persistent Data
The PostgreSQL data is persisted through a Docker volume (pgdata), ensuring data is saved across container restarts.
Troubleshooting
If you encounter any issues with the database connection, ensure the DATABASE_URL in the Node.js application matches the credentials defined in docker-compose.yml.
For any changes in the Node.js application dependencies, rebuild the Docker image with docker-compose up --build.
