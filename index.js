const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello cunt!"+req.body.name);
});

app.listen('8072', () => {
    console.log("App running! :D");
})