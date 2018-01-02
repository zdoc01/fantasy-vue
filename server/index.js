const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const ENV = process.env;
const PORT = ENV.PORT || 3000;

// enable cross-origin requests to the API
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', routes());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
