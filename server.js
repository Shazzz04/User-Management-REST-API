const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Shaza", email: "shaza@example.com" },
    { id: 2, name: "Ali", email: "ali@example.com" }
];

// Root route - shows users JSON in browser
app.get("/", (req, res) => {
    res.json(users);
});

// GET all users
app.get("/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// GET user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// POST - add user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - update user
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
    res.json(user);
});

// DELETE - remove user
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});
