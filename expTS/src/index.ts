import express from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
app.use(morgan('combined'));

app.use((req, res, next) => {
  console.log('oi');
  next();
});

app.get('/welcome', (req, res) => {
  res.send('Welcome to Web Academy');
});

app.listen(PORT, () => {
  console.log(`Servidor escultando na port ${PORT}`);
});
