import http from "http";
import fs from "fs";
import utils from "./utils.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readdir(folder, (err, files) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        files.forEach((f) => res.write(`${utils.createLink(f)}`));
        res.end("Listando os arquivo de pasta");
      }
    });
  } else {
    fs.readFile(`${folder}/${req.url}`, (err, content) => {
      res.write(utils.createVoltar());
      res.end(content);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Rodando an port ${PORT}`);
});
