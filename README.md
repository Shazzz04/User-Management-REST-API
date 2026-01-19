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

🔗 API Endpoints
1️⃣ Get All Users
Method: GET

Endpoint: /users

Description: Fetches a list of all registered users.

Sample Response:

JSON

[
  {
    "id": 1,
    "name": "Shaza",
    "email": "shaza@example.com"
  }
]
2️⃣ Create a New User
Method: POST

Endpoint: /users

Body:

JSON

{
  "name": "Zara",
  "email": "zara@example.com"
}
3️⃣ Update User Details
Method: PUT

Endpoint: /users/:id

Body:

JSON

{
  "name": "Shaza Faizer"
}
4️⃣ Delete a User
Method: DELETE

Endpoint: /users/:id

🧪 API Testing (QA Perspective)
All endpoints were rigorously tested using Thunder Client in VS Code to ensure:

✅ Correct HTTP Status Codes (200 OK, 201 Created, etc.)

✅ Data Integrity (JSON format validation)

✅ Successful CRUD lifecycle

✅ Error handling for invalid requests

This testing process validates that the system remains the most reliable and efficient tool for student data prioritization.

🚀 How to Run the Project Locally
Clone the repository

Bash

git clone [https://github.com/Shazzz04/codveda-fullstack-level1.git](https://github.com/Shazzz04/codveda-fullstack-level1.git)
Navigate to the directory

Bash

cd codveda-fullstack-level1
Install dependencies

Bash

npm install
Start the server

Bash

node server.js
Access the API The server runs on: http://localhost:3000/users

🎯 Learning Outcomes
Mastered RESTful API design concepts.

Hands-on experience with Express.js routing and middleware.

Deepened understanding of QA testing workflows.

Utilized Git/GitHub for professional version control and documentation.

👩‍💻 Author
Shazzz Software Engineering Undergraduate


Would you like me to help you generate a `LICENSE` file or a `.gitignore` file to complete your repository setup?
