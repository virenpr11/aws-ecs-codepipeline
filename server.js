const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method + ' ' + req.url);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello from ECS Fargate! Version: 1.0\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

