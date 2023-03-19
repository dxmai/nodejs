const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Hello world!!!");
  }
  if (req.url === "/info") {
    res.end("Heroes information");
  }
  res.end("<h1>404</h1>");
});

server.listen(5000);
