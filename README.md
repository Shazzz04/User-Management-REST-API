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
- RESTful API structure  
- In-memory user data handling  
- Full CRUD functionality  
- JSON request and response format  
- API tested using Thunder Client  

---

## 📂 Project Structure
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── node_modules/


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
---

### 3️⃣ Create a New User

POST /users

Request Body:

{
  "name": "Zara",
  "email": "zara@example.com"
}        

4️⃣ Update User Details

PUT /users/:id

Request Body:

{
  "name": "Shaza Faizer"
}

5️⃣ Delete a User

DELETE /users/:id

🧪 API Testing

All endpoints were tested using Thunder Client in Visual Studio Code to verify:

API functionality

Correct responses

CRUD operations

JSON data handling

Screenshots of API testing can be added for documentation and portfolio purposes.

🚀 How to Run This Project Locally

1️⃣ Clone the repository

git clone https://github.com/Shazzz04/codveda-fullstack-level1.git


2️⃣ Navigate to the project folder

cd codveda-fullstack-level1


3️⃣ Install dependencies

npm install


4️⃣ Start the server

node server.js


5️⃣ Access the API in Thunder Client or browser

http://localhost:3000/users
