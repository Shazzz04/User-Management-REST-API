# User Management REST API

## 📌 Project Description
This project is a simple **User Management REST API** developed using **Node.js** and **Express.js**.  
It allows basic **CRUD operations (Create, Read, Update, Delete)** on user data using RESTful API principles.

The project was created as part of hands-on learning to understand backend development and **API testing**, especially from a **QA perspective**.

All API endpoints were tested using **Thunder Client** inside **Visual Studio Code**.

---

## 🛠 Tools & Technologies Used
- **Node.js** – JavaScript runtime for backend development  
- **Express.js** – Web framework for building REST APIs  
- **Visual Studio Code** – Code editor and development environment  
- **Thunder Client** – API testing tool (VS Code extension)  
- **Git** – Version control system  
- **GitHub** – Source code hosting and version management  

---

## ✨ Features
- RESTful API architecture  
- In-memory user data storage  
- Full CRUD operations  
- JSON-based request and response handling  
- API testing using Thunder Client  

---

## 📂 Project Structure
codveda-fullstack-level1/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

yaml
Copy code

---

## 🔗 API Endpoints

### 1️⃣ Get All Users
**GET** `/users`

**Response:**
```json
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
2️⃣ Create a New User
POST /users

Request Body:

json
Copy code
{
  "name": "Zara",
  "email": "zara@example.com"
}
3️⃣ Update User Details
PUT /users/:id

Request Body:

json
Copy code
{
  "name": "Shaza Faizer"
}
4️⃣ Delete a User
DELETE /users/:id

🧪 API Testing
All API endpoints were tested using Thunder Client in Visual Studio Code to verify:

Correct request and response handling

CRUD functionality

Status codes

JSON data integrity

This testing process helped validate API behavior from a Quality Assurance (QA) perspective.

🚀 How to Run the Project Locally
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/Shazzz04/codveda-fullstack-level1.git
2️⃣ Navigate to the project directory
bash
Copy code
cd codveda-fullstack-level1
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the server
bash
Copy code
node server.js
5️⃣ Access the API
bash
Copy code
http://localhost:3000/users
🎯 Learning Outcomes
Understanding RESTful API concepts

Implementing CRUD operations using Express.js

API testing using Thunder Client

Backend development with Node.js

Using Git and GitHub for version control
