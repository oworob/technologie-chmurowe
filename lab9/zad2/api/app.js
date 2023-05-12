import express from 'express';
const app = express();
import { MongoClient } from 'mongodb';

const url = 'mongodb://db:27017';
const client = new MongoClient(url);

client.connect().then(() => {
  console.log("Connected to MongoDB")
})

// app.get('/users', async (req, res) => {
//     await client.connect();
//     const db = client.db('test');
//     const result = await db.collection('users').find();
//     return res.status(200).json({result});
//   });

app.listen(3000, () => {
    console.log('Server running on port 3000');
});