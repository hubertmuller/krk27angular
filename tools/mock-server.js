const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST');
  let cena = () => Math.round(Math.random() * 300) + 10;

  if (req.method === 'GET' && req.url === '/') {
    console.log(req.url);
    res.end(`[
      {
      "id": 1,
      "name": "Pfizer",
      "details": {
        "price": ${cena()}, "country": "us"
        }
      },
      {
      "id": 2,
      "name": "Novavax",
      "details": {
        "price": ${cena()}, "country": "gb"
      }
      },
      {
      "id": 3,
      "name": "Johnson & Johnson",
      "details": {
        "price": ${cena()}, "country": "gb"
      }
      },
      {
      "id": 4,
      "name": "Astra Zeneca",
      "details": {
        "price": ${cena()}, "country": "gb"
      }
      }
    ]`);
  } else if (req.method === 'PUT' && req.url.startsWith('/czlowiek')){
    console.log('czlowiek PUT/akt');
    res.end();
  } else if (req.method === 'POST' && req.url.startsWith('/czlowiek/')){
    console.log('czlowiek POST/add');
    res.end();
  } else if (req.method === 'GET' && req.url.startsWith('/czlowiek/')){
    console.log('czlowiek GET/one');
    res.end('{"oo": 1}');
  } else {
    res.end();
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('Serwer wystartowal na porcie' + port);
});
