# Help Center API

This project provides a set of RESTful APIs for managing cards in a help center. User can create card, retrieve all cards, and get a specific card by its title.

## Features

- **Create a Card:** Add new cards with a title and description.
- **Get All Cards:** Retrieve a list of all cards.
- **Get a Card by Title:** Fetch details of a specific card using its title.

## Technologies Used

### 1. Backend
- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Cors**
- **dotenv**

### 2. Frontend
- **React Js**
- **Context API**

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (version 12 or above)
- **npm** (Node Package Manager)
- **MongoDB** (or a cloud-based MongoDB Atlas)

### Instructions to set up and run the project locally:

### 1. Clone the repository and naviagte to the project directory:


```bash
git clone https://github.com/iAmritMalviya/fullstack-assignment

cd fullstack-assignment
```

### 2. Backend Setup

   Navigate to the `backend` directory and follow these steps:
   ```bash
    cd backend
```
-  **Install dependencies:**

   Run the following command to install the required dependencies:
   ```bash
   npm install

- **Start the server:**

   Start the backend server with the following command:
   ```bash
   node app.js
   ```

  This command will start the server on http://localhost:5000.



### 3. Frontend Setup

After setting up the backend, navigate back to the root directory and then to the `frontend` directory:

```bash
cd ..
cd frontend
```

-  **Install dependencies:**

   Run the following command to install the required dependencies:
   ```bash
   npm install

- **Start the Development Server:**

   Start the frontend development server with the following command:
   ```bash
   npm start
   ```

  This command will start the frontend server on http://localhost:3000.
  Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
