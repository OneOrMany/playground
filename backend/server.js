const fs = require('fs').promises;
const exists = require('fs').exists;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
app.use(cors());

console.log('baba');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json('hello world')
});

app.get('/request', async (req, res) => {
  res.json({name: 'ivan', age: '22'})
});

app.listen(1024);
