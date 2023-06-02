import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';
import accessLogger from './middlewares/accessLogger';
import router from './router/router';
import { engine } from 'express-handlebars';
// import { LoremIpsum } from 'lorem-ipsum';
const staticFilesPath = './public';
// const lorem = new LoremIpsum();
// const staticFilePaths = {
//   index: `${staticFilesPath}/html/`,
//   script: `${staticFilesPath}/js/`,
//   style: `${staticFilesPath}/css/`,
// };

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.engine('handlebars', engine({ helpers: require('./views/helpers/helpers') }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

//Faz a mesma coisa das linhas 31 ~ 33
app.use(express.static(staticFilesPath));
// app.use('/html', express.static(staticFilePaths.index));
// app.use('/js', express.static(staticFilePaths.script));
// app.use('/css', express.static(staticFilePaths.style));
// app.get('/lorem', async (req, res) => {
//   // Verifica e converte o valor para número ou usa um valor padrão
//   const numParagraphs = parseInt(req.query.numParagraphs as string);
//   const loremTexts = lorem.generateParagraphs(numParagraphs);
//   const paragraphs = loremTexts.split('\n');
//   console.log('paragraphs >', paragraphs);
//   res.json(paragraphs); // Retorna o ID e os parágrafos em um objeto JSON
// });

app.use(morgan('combined'));
app.use(accessLogger('simples'));
app.use(accessLogger('completo'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
