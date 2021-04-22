const http = require('http');
const port = 3200;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-type', 'text/plain');
  res.setHeader('Content-type', 'application/json');

  console.log(req.method, req.url);


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');



  let cena = () => Math.round(Math.random() * 300) + 10;


  if (req.method === 'GET' && req.url === '/api/') {
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
  } else if (req.method === 'PUT' && req.url.startsWith('/api/czlowiek')) {
    res.end('');
  } else if (req.method === 'POST' && req.url.startsWith('/api/czlowiek')) {
    res.end('');
  } else if (req.method === 'GET' && req.url.startsWith('/api/czlowiek')) {
    res.end(`
    {
  "imie": "Andrzej",
  "nazwisko": "Nowak",
  "plec": "m",
  "zyczenia": {
    "a": true,
    "b": true
  },
  "typ": 2,
  "komentarze": "prosze o autograf pana pielegniarza"
}

    `);
  } else {
    res.end('');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('Serwer wystartowal na porcie' + port);
});
