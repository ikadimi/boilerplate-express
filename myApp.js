let express = require('express');
let app = express();
require('dotenv').config()

app.use("/public", express.static("public"))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})


app.get('/json', (req, res) => {
    res.json({message: 
        process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"})
})

app.get('/now', (req, res, next) => {
    req.time = Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time})        
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word})
})

app.get('/name', (req, res) => {
    const { first, last } = req.query;

    res.json({name: `${first} ${last}`})
})

























 module.exports = app;
