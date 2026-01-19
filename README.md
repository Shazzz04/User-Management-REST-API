👥 User Management REST API

A simple User Management REST API built using Node.js and Express.js.
This project demonstrates CRUD operations, RESTful API design, and API testing using Thunder Client inside Visual Studio Code.

This project is suitable for QA, Backend, and Full-Stack portfolios.

🚀 Features

Create a new user

Retrieve all users

Update user details

Delete a user

RESTful API structure

JSON request & response handling

API testing using Thunder Client

🛠️ Tech Stack

Node.js

Express.js

Visual Studio Code

Thunder Client

Git & GitHub

📁 Project Structure
codveda-fullstack-level1/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

🔗 API Endpoints
Get All Users

GET /users

[
  {
    "id": 1,
    "name": "Shaza",
    "email": "shaza@example.com"
  },
  {
    "id": 2,
    "name": "Ali",
    "email": "ali@example.com"
  }
]

Create a New User

POST /users

{
  "name": "Zara",
  "email": "zara@example.com"
}

Update User Details

PUT /users/:id

{
  "name": "Shaza Faizer"
}

Delete a User

DELETE /users/:id

🧪 API Testing

All endpoints were tested using Thunder Client in Visual Studio Code to verify:

API functionality

Correct responses

CRUD operations

JSON data handling

Screenshots of API testing can be added for documentation and portfolio purposes.

⚙️ How to Run This Project Locally
Clone the repository
git clone https://github.com/Shazzz04/codveda-fullstack-level1.git

Navigate to the project folder
cd codveda-fullstack-level1

Install dependencies
npm install

Start the server
node server.js

Access the API
http://localhost:3000/users

📌 Learning Outcomes

Understanding REST APIs

Performing CRUD operations

API testing with Thunder Client

Backend development using Node.js

GitHub project documentation

👩‍💻 Author

Shazzz
Software Engineering Undergraduate
