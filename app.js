const express = require('express');
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/health", (req, res) => {
    res.status(200);
    res.send("Healthy");
});

const hostname = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});