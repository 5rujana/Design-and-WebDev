# CSI Design & Web Development Skill-Up Series 2025 - Backend Setup

## Overview

Welcome to the backend setup repository for the **CSI Design & Web Development Skill-Up Series 2025**. This repository serves as the foundation for backend development, covering essential features such as database integration, Cloudinary setup, asynchronous operations handling, API error management, and structured API responses.  It also includes a user model for implementing user authentication using JWT tokens, along with OAuth policies involving **access tokens and refresh tokens**. We also held a detailed discussion on **cookie-based authentication** mechanisms.

## Features

- **Database Setup:** Includes a preconfigured MongoDB connection using Mongoose, ensuring a scalable and reliable data storage system with support for schema validation and query capabilities.
- **Cloudinary Integration:** Seamless integration with Cloudinary for secure, scalable, and efficient image/media uploads and storage. Uploads are managed using `multer` and `cloudinary` SDK, with temporary file storage handled locally.
- **Asynchronous Operations Handling:** All asynchronous logic is wrapped using custom async handlers to prevent repetitive try-catch blocks. This ensures smoother execution flow and easier debugging during development.
- **API Error Management:** Centralized error handling using a custom `ApiError` class. Ensures consistent error response structure, simplifies debugging, and enhances stability across the codebase.
- **Structured API Responses:** Responses are standardized using a utility formatter that ensures every success or failure response follows a consistent structure—improving clarity and client-side handling.

- **User Model and Authentication:** A foundational user schema is included with fields ready for secure authentication. `JWT-based authentication` is implemented using access tokens and refresh tokens, with proper `OAuth` practices in place. Token management is enhanced with secure `HTTP-only cookies`, and sensitive data like passwords is hashed using industry best practices


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

#### **j. Install CORS**  
Allows cross-origin requests to your API.  
```sh
npm install cors
```
#### **i. Install JWT**  
Used to securely transmit authentication tokens for user sessions.
```sh
npm install jwt
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

## Thank You

Thank you for being a part of the CSI Design & Web Development Skill-Up Series 2025. We hope this backend setup serves as a solid starting point for your learning journey. Stay curious, keep building, and don't hesitate to explore further.

Happy coding!











