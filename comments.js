// Create web server application with express
// Create router object with express
const express = require('express');
const router = express.Router();
// Create comments array
const comments = [
  {
    id: 1,
    comment: 'First comment'
  },
  {
    id: 2,
    comment: 'Second comment'
  },
  {
    id: 3,
    comment: 'Third comment'
  }
];

// Get comments
router.get('/', (req, res) => {
  res.send(comments);
});

// Get comment by id
router.get('/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send('The comment with the given ID was not found');
  res.send(comment);
});

// Create new comment
router.post('/', (req, res) => {
  const comment = {
    id: comments.length + 1,
    comment: req.body.comment
  };
  comments.push(comment);
  res.send(comment);
});

// Update comment
router.put('/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send('The comment with the given ID was not found');
  comment.comment = req.body.comment;
  res.send(comment);
});

// Delete comment
router.delete('/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send('The comment with the given ID was not found');
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

// Export router
module.exports = router;
