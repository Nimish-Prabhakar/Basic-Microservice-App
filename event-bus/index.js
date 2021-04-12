const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('hhtp://localhost:4000/events', event);
  await axios.post('hhtp://localhost:4001/events', event);
  await axios.post('hhtp://localhost:4002/events', event);
  await axios.post('hhtp://localhost:4003/events', event);

  res.status(201).send({ Status: 'OK' });
});

app.listen(4005, () => {
  console.log('listening on port 4005');
});
