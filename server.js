const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Successful response.');
});
app.get('/welcome', (req, res) => {
    res.send('Welcome Back');
  });

// app.listen(port, () => console.log('Example app is listening on port 3000.'));

module.exports=app