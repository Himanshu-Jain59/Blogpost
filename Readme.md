# Blogpost

A simple blog application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Authentication:** JWT-based login & registration.
- **CRUD Operations:** Create, view, edit, and delete blog posts.
- **Responsive UI:** Built with React and styled-components.

## Tech Stack

- **Front-End:** React, React Router, Axios, Styled Components
- **Back-End:** Node.js, Express, MongoDB, Mongoose, JWT

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-stack-blog-app.git
cd mern-stack-blog-app
```

### 2. Set up Back-End

```bash
cd server
npm install
```

Create .env file in server and add:

```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=5000
```

Run the server:

```bash
npm start
```

### 3. Set up Front-End

```bash
cd client
npm install
npm start
```

## Usage

- **Home**: Displays all blog posts.
- **Create Post**: Authenticated users can create posts.
- **Edit/Delete Post**: Authenticated users can edit or delete their posts.
- **Authentication**: Register and login with JWT.
