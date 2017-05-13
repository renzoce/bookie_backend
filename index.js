const http = require('http');
const db = require('app/config/config.js');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

db.query('SELECT * from test1 ', function(err, rows, fields) {
  if (!err)
    console.log(rows);
  else
    console.log('Error while performing Query.');
});
