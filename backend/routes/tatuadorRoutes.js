import express from 'express';
const router = express.Router();
import {
  perfil,
  inicio,
  acceso,
  cierre,
} from '../controllers/tatuadorController.js';
import checkAutenticado from '../middleware/autenticacionMw.js';

router.post('/', acceso);
router.get('/inicio', checkAutenticado, inicio);
router.get('/perfil', checkAutenticado, perfil);
router.get('/logout', checkAutenticado, cierre);

export default router;
