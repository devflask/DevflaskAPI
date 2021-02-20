const express = require('express');
const api = express();

api.get('/', (req, res) => {
    res.send("Hello World, welcome to production!")
});

api.listen('8072', () => console.log("API running on port 8072"));