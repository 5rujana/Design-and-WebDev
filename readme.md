# CSI Design & Web Development Skill-Up Series 2025 - Backend Setup

## Overview

Welcome to the backend setup repository for the **CSI Design & Web Development Skill-Up Series 2025**. This repository serves as the foundation for backend development, covering essential features such as database integration, Cloudinary setup, asynchronous operations handling, API error management, and structured API responses. Additionally, it includes a user model, setting the stage for the next session on **User Authentication**.

## Features

- **Database Setup:** Preconfigured database connection for seamless integration.
- **Cloudinary Integration:** Enables secure and efficient media uploads and storage.
- **Asynchronous Operations Handling:** Proper use of async-await functions for smooth execution.
- **API Error Management:** Centralized error handling for better debugging and stability.
- **Structured API Responses:** Standardized response format for API consistency.
- **User Model:** Base user schema to be expanded in the authentication session.

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (Latest LTS version recommended)
- **MongoDB** (Local or cloud instance)
- **Cloudinary Account** (For media storage)

## Installation

### 1. Clone the repository:

   ```sh
    git clone https://github.com/5rujana/Design-and-WebDev.git
    cd Design-and-WebDev

   ```

### 2 Install dependencies:

Run the following commands to install the required dependencies:  

#### **a. Install Environment Variable Loader**  
Loads environment variables from a `.env` file.  
```sh
npm install dotenv
```

#### **b. Install Mongoose Pagination Plugin**  
A plugin for paginating MongoDB aggregate queries.  
```sh
npm install mongoose-aggregate-paginate-v2
```

#### **c. Install Nodemon (for development)**  
Automatically restarts the server when file changes are detected.  
```sh
npm install nodemon --save-dev
```

#### **d. Install Express**  
A lightweight web framework for building APIs.  
```sh
npm install express
```

#### **e. Install Cloudinary SDK**  
Used for media storage and image management.  
```sh
npm install cloudinary
```

#### **f. Install Multer**  
Middleware for handling file uploads in Node.js.  
```sh
npm install multer
```

#### **g. Install Prettier (for code formatting)**  
Formats code for consistency.  
```sh
npm install prettier --save-dev
```

#### **h. Install Cookie Parser**  
Middleware for parsing cookies in requests.  
```sh
npm install cookie-parser
```

#### **i. Install CORS**  
Allows cross-origin requests to your API.  
```sh
npm install cors
```

### 3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

### 4. Run the server:

  To start the project in development mode with **nodemon**:  
```sh
npm run dev
```

To start the project normally:  
```sh
npm start
```

## Folder Structure

```
📂 skillup-backend
├── 📂 puclic 
    ├── 📂 temp  #local storage 
├── 📂 src 
    ├── 📂 DB  
    ├── 📂 controllers   # API controllers
    ├── 📂 models        # Database models (User model included)
    ├── 📂 routes        # API routes
    ├── 📂 middlewares   # Middleware functions (error handling, authentication, etc.)
    ├── 📂 utils         # Utility functions (async handling, response formatting, etc.)
    ├── 📄 constant.js  # contains constant values of the project
    ├── 📄 app.js  
    ├── 📄 index.js     # Entry point of the application
├── 📄 package.json  # Project dependencies and scripts
├── 📄 package.lock.json
└── 📄 .env  # Example environment variables
```

## Next Session: User Authentication and Controller

In the upcoming session, we will implement **User Authentication**, covering:

- User registration and login
- JWT-based authentication
- Secure password handling

Additionally, we will cover Controller Implementation, including:

- Structuring controllers for modularity
- Handling API requests and responses efficiently
- Implementing middleware for authentication
- Error handling best practices
Stay tuned!




