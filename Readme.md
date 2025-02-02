# MERN CRUD Application

A simple To-Do application built using the MERN stack (MongoDB, Express, React, Node.js) in October 2022. This app demonstrates basic CRUD (Create, Read, Update, Delete) operations.

## Features

- **Add Tasks**: Create new to-do items.
- **View Tasks**: Display all tasks in a list.
- **Edit Tasks**: Update existing tasks.
- **Delete Tasks**: Remove tasks from the list.

## Technologies Used

- **MongoDB**: NoSQL database for storing tasks.
- **Express**: Web framework for Node.js.
- **React**: Front-end library for building user interfaces.
- **Node.js**: JavaScript runtime for the server.

## Installation

To run this application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JeremiahDMoore/mern-crud-oct-2022.git
   cd mern-crud-oct-2022
   ```

2. **Install Server Dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**:
   ```bash
   cd ../client
   npm install
   ```

4. **Start the Application**:
   - **Server**:
     ```bash
     cd ../server
     npm start
     ```
     The server will run on `http://localhost:4000`.

   - **Client**:
     ```bash
     cd ../client
     npm start
     ```
     The client will run on `http://localhost:3000`.

## Usage

- **Add a Task**: Enter the task description and click "Add".
- **Edit a Task**: Click the "Edit" button next to a task, modify the description, and save.
- **Delete a Task**: Click the "Delete" button to remove a task.

## Acknowledgments

Developed as a learning project to demonstrate CRUD operations using the MERN stack.
