const express = require('express');
const bodyParser = require('body-parser');
const tasksRepository = require("./tasksRepository");

const app = require('./api');
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

