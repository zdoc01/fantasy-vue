const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', routes());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
