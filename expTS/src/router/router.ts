import { Router } from 'express';

const router = Router();

router.get('/log', (req, res) => {
  res.send('Gravando os logs no arquivo access.log');
});

export default router;
