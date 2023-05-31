import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';
import accessLogger from './middlewares/accessLogger';
import router from './router/router';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
app.use(morgan('combined'));

app.use(accessLogger('simples'));
app.use(accessLogger('completo'));
app.use(router);

app.use((req, res, next) => {
  console.log('oi');
  next();
});

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
