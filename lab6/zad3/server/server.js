const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
const port = 3001

const url = 'mongodb://database:27017';
const client = new MongoClient(url);

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/getdata', async (req, res) => {
    await client.connect();
    const db = client.db('test');
    const result = await db.collection('persons').find().toArray();
    return res.status(200).json({result});
  });

app.get('/adddata', async (req, res) => {
    await client.connect();
    const db = client.db('test');
    const result = await db.collection('persons').insertOne({'name':`jan${RandomInt(20)}`,'surname':`kowalski${RandomInt(20)}`})
    return res.status(200).json("data added!")
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})