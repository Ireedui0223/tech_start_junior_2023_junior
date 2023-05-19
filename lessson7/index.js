const express = require('express');

const app = express();
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.get('/api/courses/', (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening port:${port} `);
});
