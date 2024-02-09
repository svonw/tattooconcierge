import express from 'express';
const router = express.Router();
import {
  crear,
  recibirCitas,
  recibirCita,
  actualizarCita,
  eliminarCita,
} from '../controllers/citaController.js';
import checkAutenticado from '../middleware/autenticacionMw.js';

router
  .route('/')
  .post(checkAutenticado, crear)
  .get(checkAutenticado, recibirCitas);

router
  .route('/:id')
  .get(checkAutenticado, recibirCita) //api/citas/:id - metodo get
  .put(checkAutenticado, actualizarCita) //api/citas/:id - metodo put
  .delete(checkAutenticado, eliminarCita); //api/citas/:id - metodo delete

export default router;
