let express = require('express');
let app = express();
require('dotenv').config()

app.use("/public", express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})


app.get('/json', (req, res) => {
    res.json({message: 
        process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"})
})






























 module.exports = app;
