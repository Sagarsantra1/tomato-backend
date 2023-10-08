# Tomato_Backend

Tomato_Backend - A simple Express.js application for managing cities and restaurants.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Frontend Repository](#frontend-repository)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [Cities](#cities)
    - [Get All Cities](#get-all-cities)
    - [Get City by ID](#get-city-by-id)
  - [Restaurants](#restaurants)
    - [Get All Restaurants](#get-all-restaurants)
    - [Get Restaurants by City](#get-restaurants-by-city)
    - [Get Restaurant by Slug](#get-restaurant-by-slug)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Overview

MyExpressApp is a straightforward Express.js application designed to manage city and restaurant data. It provides a simple API for retrieving and manipulating information about cities and restaurants.

## Features

- Retrieve a list of cities and their details.
- View information about specific cities.
- Add new cities to the database.
- Update existing city information.
- Delete cities from the database.
- Access restaurant information, including filtering by city, cuisine, and cost per person.

## Getting Started

To run this project locally, follow the steps below:

### Frontend Repository

You can find the frontend code for this project in the

[Tomato Frontend Repository](https://github.com/Sagarsantra1/tomato-frontend).


### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher) is installed on your machine.
- MongoDB is installed and running (if you want to use a MongoDB database).

### Installation

1. Clone the repository:


```shell
git clone https://github.com/Sagarsantra1/tomato-backend.git
cd my-express-app
```

2. Install dependencies:

   ```shell
   npm install
   ```

## Usage

To start the Express.js server and use the API, run the following command:

```shell
npm start
```

You can then access the API at `http://localhost:3000`.

## API Documentation

This API documentation provides information on the available endpoints and how to use them.

## Cities

### Get All Cities

- **URL**: `/cities`
- **Method**: `GET`
- **Description**: Retrieves a list of all cities.
- **Response**: Returns an array of city objects.

### Get City by ID

- **URL**: `/cities/:id`
- **Method**: `GET`
- **Description**: Retrieves a single city by its unique ID.
- **Response**: Returns a city object.
  `

## Restaurants

### Get All Restaurants

- **URL**: `/restaurants`
- **Method**: `GET`
- **Description**: Retrieves a list of all restaurants.
- **Response**: Returns an array of restaurant objects.

### Get Restaurants by City

- **URL**: `/restaurants/:city`
- **Method**: `GET`
- **Description**: Retrieves restaurants in a specific city based on various query parameters.
- **Query Parameters**:
  - `select`: Specify fields to include in the response.
  - `cuisine`: Filter restaurants by cuisine type.
  - `CostPerPersonmin` and `CostPerPersonmax`: Filter restaurants by cost per person range.
  - `q`: Search for restaurants by name or keyword.
  - `sort`: Sort restaurants by a specific field (e.g., `name`, `rating`).
  - `order`: Sort order (1 for ascending, -1 for descending).
  - `rating`: Filter restaurants by minimum rating.
- **Response**: Returns an array of restaurant objects based on the provided query parameters.

### Get Restaurant by Slug

- **URL**: `/restaurants/:city/:slug`
- **Method**: `GET`
- **Description**: Retrieves a single restaurant by its unique slug within a specific city.
- **Query Parameters**:
  - `select`: Specify fields to include in the response.
- **Response**: Returns a restaurant object.

## Configuration

To configure the application, create a `.env` file in the project root directory. You can use the following variables:

- `MONGODB_URI`: The MongoDB connection URI.
- `PORT`: The port on which the Express.js server will run.
- `JWT_SECRET`: Your secret key for JWT authentication (if needed).

Example `.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/mydb
PORT=3000
JWT_SECRET=mysecretkey
```

## Deployment

To deploy this project to a production environment, follow the deployment guidelines for your hosting platform. Be sure to set the necessary environment variables for production.

## Contributing

Contributions are welcome! If you'd like to contribute to this project

## Acknowledgments

- The Express.js and Mongoose communities for their excellent documentation and resources.
- Contributors to open-source libraries used in this project.
