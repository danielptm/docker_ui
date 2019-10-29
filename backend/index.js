const express = require('express');
const app = express();

console.log("elephant");

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/', (req, res) => {
 return res.send('Hello world');
});

app.listen(8080);
