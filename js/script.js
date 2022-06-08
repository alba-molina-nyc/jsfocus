//  local host stuff
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// api stuff

const promise = $.ajax({
  url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key={cec6fd31-d3a5-454a-a806-f997548b7cbf}",
});

promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log("bad request: ", error);
  }
);
