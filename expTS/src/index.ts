import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';
import accessLogger from './middlewares/accessLogger';
import router from './router/router';
import { engine } from 'express-handlebars';
const pathRoot = process.cwd();
import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.engine('handlebars', engine({ helpers: require('./views/helpers/helpers') }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

//  app.use(express.static(pathRoot));

app.use(
  sass({
    src: `${pathRoot}/public/scss`,
    dest: `${pathRoot}/public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use('/css', express.static(`${pathRoot}/public/css`));
app.use('/js', express.static(`${pathRoot}/node_modules/bootstrap/dist/js/`));
app.use(
  '/webfonts',
  express.static(`${pathRoot}/node_modules/@fortawesome/fontawesome-free/webfonts`),
);

app.use(morgan('combined'));
app.use(accessLogger('simples'));
app.use(accessLogger('completo'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
