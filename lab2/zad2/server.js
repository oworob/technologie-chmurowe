import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ date: new Date() });
});

server.listen(8080);
console.log("Server running at http://localhost:8080/");