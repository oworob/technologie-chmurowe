import express from 'express';
const app = express();
import { MongoClient } from 'mongodb';

const url = 'mongodb://db:27017';
const client = new MongoClient(url);

app.get('/users', async (req, res) => {
    await client.connect();
    const db = client.db('test');
    const result = await db.collection('users').find();
    return res.status(200).json({result});
  });

app.listen(3003, () => {
    console.log('Server running on port 3003');
});