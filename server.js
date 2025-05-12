const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Do not fear failure but rather fear not trying.');
});

app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
