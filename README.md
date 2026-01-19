📌 User Management REST API
📖 Project Overview

This project is a simple User Management REST API built using Node.js and Express.js.
It demonstrates core backend concepts such as RESTful API design, CRUD operations, and API testing.

The API allows users to be created, retrieved, updated, and deleted using standard HTTP methods.
All endpoints were tested using Thunder Client inside Visual Studio Code.

This project was developed as part of hands-on learning to strengthen backend and API testing skills relevant to QA and software engineering roles.

🛠️ Technologies & Tools Used

Node.js – JavaScript runtime environment

Express.js – Backend web framework

VS Code – Development environment

Thunder Client – API testing tool

Git & GitHub – Version control and repository hosting

📂 Project Features

RESTful API architecture

CRUD operations on user data

JSON-based request and response handling

Proper HTTP status codes

Tested API endpoints using Thunder Client

🔗 API Endpoints
▶️ Get all users

GET /users

Response:

[
  {
    "id": 1,
    "name": "Shaza",
    "email": "shaza@example.com"
  }
]

▶️ Get user by ID

GET /users/:id

▶️ Add a new user

POST /users

Request Body:

{
  "name": "Zara",
  "email": "zara@example.com"
}

▶️ Update user details

PUT /users/:id

Request Body:

{
  "name": "Shaza Faizer"
}

▶️ Delete a user

DELETE /users/:id

🧪 API Testing

All API endpoints were tested using Thunder Client within VS Code to validate:

Request handling

JSON responses

Status codes

CRUD functionality

Screenshots of API testing results are included as part of the project documentation.

🚀 How to Run the Project Locally

Clone the repository

git clone https://github.com/Shazzz04/codveda-fullstack-level1.git


Navigate to the project folder

cd codveda-fullstack-level1


Install dependencies

npm install


Start the server

node server.js


Open browser or Thunder Client

http://localhost:3000/users

🎯 Learning Outcomes

Gained hands-on experience with backend development using Node.js and Express

Understood REST API structure and CRUD operations

Practiced API testing using Thunder Client

Improved understanding of backend workflows relevant to QA roles

📌 Author

Shaza Faizer
Aspiring QA / Software Engineering Graduate
