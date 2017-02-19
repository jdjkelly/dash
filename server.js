const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

  if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

  res.setHeader('Content-Type', 'application/javascript');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      cards: [
        {
          header: "API (mean)",
          color: "green",
          state: "100ms"
        },
        {
          header: "API (95th%)",
          color: "red",
          state: "800ms"
        },
        {
          header: "API (uptime)",
          state: "99.95%"
        }
      ]
    })
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
