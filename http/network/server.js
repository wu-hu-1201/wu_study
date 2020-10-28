const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('ok');
  res,end('<p><span>123</span></p>')
  
});
server.listen(8088);
