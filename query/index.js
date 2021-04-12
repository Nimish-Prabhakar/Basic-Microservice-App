const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, Status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, Status });
  }

  if (type === 'CommentUpdated') {
    const { Status, id, postId, content } = data;
    const post = posts[postId];
    const comment = post.comment.find((comment) => {
      return comment.id === id;
    });
    comment.Status = Status;
    comment.content = content;
  }
  res.status(201).send({ Status: 'OK' });
});

app.listen(4002, () => {
  console.log('listening on 4002');
});
