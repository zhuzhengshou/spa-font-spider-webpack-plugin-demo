
const express = require('express');
const path = require('path');

const app = express();

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3002, () => {
  console.log('server is run');
})