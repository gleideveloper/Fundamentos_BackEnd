import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import { LoremIpsum } from "lorem-ipsum";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const lorem = new LoremIpsum();

const staticFilesPath = process.env.PATH_DIR;
const staticFilePaths = {
  index: path.join(staticFilesPath, "index.html"),
  script: path.join(staticFilesPath, "script.js"),
  style: path.join(staticFilesPath, "style.css"),
};

app.use(express.static(staticFilesPath));

app.get("/", async (req, res) => {
  try {
    const fileContent = await fs.readFile(staticFilePaths.index, "utf8");
    res.send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/script.js", async (req, res) => {
  try {
    const fileContent = await fs.readFile(staticFilePaths.script, "utf8");
    res.setHeader("Content-Type", "application/javascript");
    res.send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/style.css", async (req, res) => {
  try {
    const fileContent = await fs.readFile(staticFilePaths.style, "utf8");
    res.setHeader("Content-Type", "text/css");
    res.send(fileContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/lorem", async (req, res) => {
  const numParagraphs = parseInt(req.query.numParagraphs);

  if (isNaN(numParagraphs) || numParagraphs < 1 || numParagraphs > 10) {
    res.status(400).send("Number of paragraphs must be between 1 and 10.");
    return;
  }

  const loremTexts = lorem.generateParagraphs(numParagraphs);
  const paragraphs = loremTexts.split("\n");
  console.log("paragraphs >", paragraphs);

  res.json(paragraphs);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
