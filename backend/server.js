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

app.get('/users', (req, res) => {
  const { spawn } = require('child_process');
  spawn('python3', ['./script.py']);

  const fs = require('fs');
  fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    console.log(users)
    res.json(users)
  });
});

app.listen(1024);
