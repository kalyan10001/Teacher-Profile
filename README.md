# Teacher Management Application

This is a basic web application where teacher data is stored in MongoDB and served through an Express server. The application allows users to view teacher details and select a teacher from a dropdown to fetch and display the teacher's information.

## Project Structure

The project is structured as follows:

root/ ├── server/ # Backend code (Express & MongoDB) ├── client/ # Frontend code (React.js) ├── README.md # Project documentation └── .gitignore # Git ignore file

markdown
Copy code

## Technologies Used

- **MongoDB** - Used to store teacher data.
- **Express.js** - Backend framework for handling requests and managing data.
- **React.js** - Frontend library used for building user interfaces.
- **Node.js** - JavaScript runtime environment.
- **Mongoose** - MongoDB object modeling tool used with Node.js.

## Features

- **Teacher Data**: Teacher information is stored in MongoDB.
- **Teacher List Dropdown**: A dropdown list is displayed to allow users to select a teacher.
- **Fetch Teacher Data**: Upon selecting a teacher, data is fetched from the server and displayed on the client-side.

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```
### 2. Install Dependencies
Backend (Server)
Navigate to the server/ folder and install dependencies:

```bash
Copy code
cd server
npm install
```
Frontend (Client)
Navigate to the client/ folder and install dependencies:

```bash
Copy code
cd client
npm install
```
### 3. Running the Application
Start the Backend
In the server/ folder, run:

```bash
Copy code
npm start
```
This will start the Express server, which connects to the MongoDB database.

Start the Frontend
In the client/ folder, run:

```bash
Copy code
npm start
```
This will start the React development server and open the application in your browser.

### 4. Access the Application
After starting both the server and client, open your browser and visit https://teacher-profile.vercel.app/ to interact with the application.

Endpoints
The backend exposes the following API endpoint:
```
GET /api/users/teachers: Fetch all teacher data.
```
License
This project is licensed under the MIT License - see the LICENSE file for details.
