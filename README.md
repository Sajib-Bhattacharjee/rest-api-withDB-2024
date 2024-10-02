<div align="center">
  
# `MERN REST API Documentation`

</div>

## Introduction

This is a REST API built with the MERN stack (MongoDB, Express, React, Node.js). It provides a backend service for handling user authentication and resource management.

## Features

- User Registration
- User Login
- CRUD operations on resources
- JWT Authentication

## Technologies

- **MongoDB**: For database management
- **Express**: For server-side logic
- **React**: For the frontend (not included in this API)
- **Node.js**: For runtime environment
- **Mongoose**: For MongoDB object modeling

## Getting Started

### Prerequisites

- Node.js
- MongoDB

 
## Authentication

All endpoints that require authentication should include a Bearer token in the Authorization header.

## Endpoints

### User Management

#### 1. Register a New User

- **Endpoint:** `/users/register`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "username": "string",
        "email": "string",
        "password": "string"
    }
    ```
- **Response:**
    - **201 Created**
    ```json
    {
        "message": "User registered successfully."
    }
    ```
    - **400 Bad Request**
    ```json
    {
        "error": "User already exists."
    }
    ```

#### 2. Login User

- **Endpoint:** `/users/login`
- **Method:** `POST`
- **Request Body:**
    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```
- **Response:**
    - **200 OK**
    ```json
    {
        "token": "jwt-token",
        "user": {
            "id": "user_id",
            "username": "string",
            "email": "string"
        }
    }
    ```
    - **401 Unauthorized**
    ```json
    {
        "error": "Invalid email or password."
    }
    ```

### Product Management

#### 3. Create a New Product

- **Endpoint:** `/products`
- **Method:** `POST`
- **Headers:**
    - Authorization: Bearer `<token>`
- **Request Body:**
    ```json
    {
        "name": "string",
        "description": "string",
        "price": "number",
        "category": "string"
    }
    ```
- **Response:**
    - **201 Created**
    ```json
    {
        "message": "Product created successfully.",
        "product": {
            "id": "product_id",
            "name": "string",
            "description": "string",
            "price": "number",
            "category": "string"
        }
    }
    ```

#### 4. Get All Products

- **Endpoint:** `/products`
- **Method:** `GET`
- **Response:**
    - **200 OK**
    ```json
    [
        {
            "id": "product_id",
            "name": "string",
            "description": "string",
            "price": "number",
            "category": "string"
        },
        ...
    ]
    ```

#### 5. Get a Single Product

- **Endpoint:** `/products/:id`
- **Method:** `GET`
- **Response:**
    - **200 OK**
    ```json
    {
        "id": "product_id",
        "name": "string",
        "description": "string",
        "price": "number",
        "category": "string"
    }
    ```
    - **404 Not Found**
    ```json
    {
        "error": "Product not found."
    }
    ```

#### 6. Update a Product

- **Endpoint:** `/products/:id`
- **Method:** `PUT`
- **Headers:**
    - Authorization: Bearer `<token>`
- **Request Body:**
    ```json
    {
        "name": "string",
        "description": "string",
        "price": "number",
        "category": "string"
    }
    ```
- **Response:**
    - **200 OK**
    ```json
    {
        "message": "Product updated successfully."
    }
    ```
    - **404 Not Found**
    ```json
    {
        "error": "Product not found."
    }
    ```

#### 7. Delete a Product

- **Endpoint:** `/products/:id`
- **Method:** `DELETE`
- **Headers:**
    - Authorization: Bearer `<token>`
- **Response:**
    - **200 OK**
    ```json
    {
        "message": "Product deleted successfully."
    }
    ```
    - **404 Not Found**
    ```json
    {
        "error": "Product not found."
    }
    ```

## Error Handling

All error responses will have the following structure:

```json
{
    "error": "error_message"
}
```


### Customization Notes
- Adjust the endpoints, request bodies, and responses to fit the actual functionality of your API.
- Add any additional sections necessary, such as Rate Limiting, CORS settings, or specific error codes.
- You might want to include examples of requests using tools like Postman or curl for better clarity.


---

<div align="center">

##### 🛡️ `All rights reserved by Sajib Bhattacharjee @2024`

### 👨‍💻 `Created By-->`

**&copy; `Sajib Bhattacharjee`**

**💖 Dedicated to "Zahan" 💖**

> > > > ### 🙏 Thanks a Lot for Visiting...!!!

</div>
