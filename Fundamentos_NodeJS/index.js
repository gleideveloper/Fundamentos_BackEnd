const http = require("http");
const fs = require("fs");
require("dotenv").config();

PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req, res) => {
  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);
    else {
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      files.forEach((f) => res.write(`${f} <br>`));
      res.end("Listando os arquivo de uma pasta");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Rodando an port ${PORT}`);
});
