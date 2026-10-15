import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World from Express.js!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.get("/dashboard", (req, res) => {
    res.send("Welcome to the dashboard.");
});

app.get("/contact", (req, res) => {
    res.send("This is the contact page.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});