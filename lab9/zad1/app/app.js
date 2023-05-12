const express = require('express')

const app = express();
port = process.env.PORT

app.get('/', async (req, res) => {
    res.send("Welcome to app")
});

app.get('/hello', async (req, res) => {
    res.send("Hello")
});

app.get('/data', async (req, res) => {
    res.send("This is some data")
});

app.get('/login', async (req, res) => {
    res.send("This is the login page")
});



app.listen(port, () => {
    console.log('Server running on port '+port);
});

