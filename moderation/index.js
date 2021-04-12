const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log(data);
  if (type === 'CommentCreated') {
    const { id, content, postId, Status } = data;

    const newStatus = content.includes('apple') ? 'Rejected' : 'Approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id,
        postId,
        content,
        Status: newStatus,
      },
    });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log('listening on port 4003');
});
