// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// Create a comments array with 3 comments
const comments = [
  { username: 'Todd', comment: 'lol that is so funny!' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' }
];

// Access comments array from the web server
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});