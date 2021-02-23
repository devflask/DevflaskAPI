const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello cunt!"+req.body.name);
});

app.listen('8072', () => {
    console.log("App running! :D");
})