import express from 'express';
import redis from 'redis';

const app = express();
const client = redis.createClient({url:'redis://db:6379'});

client.connect().then(() => {
    console.log("Connected to Redis")
})


app.get('/get/:key', (req, res) => {
    const { key } = req.params;
    client.get(key).then((value) => {
        res.send(`The value of ${key} is ${value}`);
      }).catch((error) => {
        res.send(error);
      });
  });


app.get('/set/:key/:value', async (req, res) => {
    const { key, value } = req.params;
  
    client.set(key, value).then((reply) => {
        res.send(`Set the value of ${key} to ${value}`);
      }).catch((error) => {
        res.send(error);
      });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

