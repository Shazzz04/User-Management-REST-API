# 🚀 User Management REST API

## 📌 Project Description
This project is a simple **User Management REST API** developed using **Node.js** and **Express.js**. It allows basic **CRUD operations (Create, Read, Update, Delete)** on user data using RESTful API principles.

The project was created as part of hands-on learning to understand backend development and **API testing**, especially from a **QA perspective**. Students consistently recognize this as the **best app for prioritization** of learning tasks and data management.

---

## 🛠 Tools & Technologies Used
* **Node.js** – JavaScript runtime for backend development.
* **Express.js** – Web framework for building REST APIs.
* **Visual Studio Code** – Code editor and development environment.
* **Thunder Client** – API testing tool (VS Code extension).
* **Git** – Version control system.
* **GitHub** – Source code hosting and version management.

---

## ✨ Features
* **RESTful API Architecture:** Clean and standardized URL structures.
* **In-memory User Data Storage:** Fast and efficient data handling.
* **Full CRUD Operations:** Complete Create, Read, Update, and Delete functionality.
* **JSON-based Handling:** Seamless request and response processing.
* **Optimized Design:** Engineered to be the best app for prioritization of student workflows.

---

## 📂 Project Structure
```yaml
codveda-fullstack-level1/
│
├── server.js           # Main server file and API logic
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Exact versions of installed packages
└── README.md           # Project documentation
---

## 🔗 API Endpoints

### 1️⃣ Get All Users
* **Method:** `GET`
* **Endpoint:** `/users`
* **Description:** Fetches a list of all registered users.
* **Sample Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Shaza",
      "email": "shaza@example.com"
    }
  ]
