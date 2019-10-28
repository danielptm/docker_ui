const express = require('express');
const app = express();

console.log('hi');

app.get('/', (req, res) => {
 return res.send('Hello world');
});

app.listen(8080);
