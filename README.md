# 👥 User Management REST API

A simple User Management REST API built using Node.js and Express.js. This project demonstrates CRUD operations, RESTful API design, and API testing using Thunder Client inside VS Code.

This project is beginner-friendly and suitable for QA, Backend, and Full-Stack portfolios.

## 🚀 Features

- Create a new user
- Retrieve all users
- Update user details
- Delete a user
- RESTful API structure
- JSON request & response handling
- Tested using Thunder Client

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **VS Code** – Development environment
- **Thunder Client** – API testing tool
- **Git & GitHub** – Version control

## 📁 Project Structure

```
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔗 API Endpoints

### 1️⃣ Get All Users

**Endpoint:** `GET /users`

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
```

### 2️⃣ Create a New User

**Endpoint:** `POST /users`

**Request Body:**

```json
{
  "name": "Zara",
  "email": "zara@example.com"
}
```

### 3️⃣ Update User Details

**Endpoint:** `PUT /users/:id`

**Request Body:**

```json
{
  "name": "Shaza Faizer"
}
```

### 4️⃣ Delete a User

**Endpoint:** `DELETE /users/:id`

## 🧪 API Testing

All API endpoints were tested using **Thunder Client** (VS Code extension) to verify:

- API functionality
- Correct HTTP responses
- CRUD operations
- JSON data handling

📸 Screenshots of API testing can be added to this repository for documentation and portfolio purposes.

## ⚙️ How to Run This Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shazzz04/codveda-fullstack-level1.git
```

### 2️⃣ Navigate to the project folder

```bash
cd codveda-fullstack-level1
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the server

```bash
node server.js
```

### 5️⃣ Access the API

Use Thunder Client or your browser:

```
http://localhost:3000/users
```

## 📌 Learning Outcomes

- Understanding REST APIs
- Performing CRUD operations
- API testing using Thunder Client
- Backend development with Node.js
- GitHub project documentation

## 👩‍💻 Author

**Shazzz**  
Software Engineering Undergraduate  
Aspiring QA / Backend / Full-Stack Developer

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

## ⭐ Show your support

Give a ⭐️ if this project helped you!
