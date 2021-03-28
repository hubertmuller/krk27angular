const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-type', 'application/json');
  let test = Math.random();
  res.end(`[
    {
    "id": 1,
    "name": "Pfizer",
    details: {
      "price": 200, "country": "us"
    },
    {
    "id": 2,
    "name": "Novavax",
    details: {
      "price": 220, "country": "gb"
    }
  ]`);
});

server.listen(port, '127.0.0.1', () => {
  console.log('Serwer wystartowal na porcie' + port);
});
