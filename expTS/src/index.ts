import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';
import accessLogger from './middlewares/accessLogger';
import router from './router/router';
import { engine } from 'express-handlebars';
// import { LoremIpsum } from 'lorem-ipsum';
// const lorem = new LoremIpsum();
// const staticFilesPath = process.env.PATH_DIR ?? './public/';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const PATH_HELPERS = `${__dirname}/views/helpers/`;
app.engine('handlebars', engine({ helpers: require(`${PATH_HELPERS}/helpers.ts`) }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// app.use(express.static(staticFilesPath));

app.use(morgan('combined'));

app.use(accessLogger('simples'));
app.use(accessLogger('completo'));
app.use(router);

// app.get('/lorem', async (req, res) => {
//   const numParagraphs = parseInt(req.query.numParagraphs);
//   const loremTexts = lorem.generateParagraphs(numParagraphs);
//   const paragraphs = loremTexts.split('\n');
//   console.log('paragraphs >', paragraphs);

//   res.json(paragraphs);
// });

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
