import express from 'express';
import redis from 'redis';
import postgres from 'pg';

const app = express();

const redisclient = redis.createClient({url:process.env.REDIS_URL});
redisclient.connect().then(() => {
    console.log("Connected to Redis")
})

const pgpool = new postgres.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});
pgpool.connect().then(() => {
  console.log("Connected to PostgreSQL")
})

app.get('', async (req, res) => {
  res.send("Hello")
});

app.get('/get/:key', (req, res) => {
    const { key } = req.params;
    redisclient.get(key).then((value) => {
        res.send(`The value of ${key} is ${value}`);
      }).catch((error) => {
        res.send(error);
      });
  });


app.get('/set/:key/:value', async (req, res) => {
    const { key, value } = req.params;
  
    redisclient.set(key, value).then((reply) => {
        res.send(`Set the value of ${key} to ${value}`);
      }).catch((error) => {
        res.send(error);
      });
});

app.post("/adduser", async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  pgpool.query(`CREATE USER ${username} WITH PASSWORD '${password}'`, (err, res) => {
      if (err) {
          console.log(err);
      } else {
          console.log(`Created user ${username} with password ${password}`);
      }
  })
  res.send("User created")
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

