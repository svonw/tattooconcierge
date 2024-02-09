import Tatuador from '../models/Tatuador.js';
import Cita from '../models/Cita.js';

// crear cita
const crear = async (req, res) => {
  const cita = new Cita(req.body);
  cita.user = req.session.userId;
  console.log(cita);
  try {
    const citaCreada = await cita.save();
    res.json(citaCreada);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la cita' });
  }
};

// ver citas
const recibirCitas = async (req, res) => {
  try {
    const citas = await Cita.find().where('user').equals(req.session.userId);
    res.json(citas);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al mostrar las citas.' });
  }
};
//recibir una sola cita
const recibirCita = async (req, res) => {
  try {
    const { id } = req.params;
    const cita = await Cita.findById(id);
    if (cita.user._id.toString() !== req.session.userId) {
      return res.json({ msg: 'Accion no permitida' });
    }
    if (cita) {
      res.json(cita);
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al mostrar la cita.' });
  }
};
//actualizar  cita
const actualizarCita = async (req, res) => {
  try {
    const { id } = req.params;
    const cita = await Cita.findById(id);
    if (cita.user._id.toString() !== req.session.userId) {
      return res.json({ msg: 'Accion no permitida' });
    }
    if (cita) {
      const actualizaCita = await Cita.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(actualizaCita);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al editar la cita.' });
  }
};

//eliminar una cita
const eliminarCita = async (req, res) => {
  try {
    const { id } = req.params;
    const cita = await Cita.findById(id);
    if (!cita) {
      return res.status(404).json({ msg: 'Cita no encontrada' });
    }

    if (cita.user && cita.user._id.toString() !== req.session.userId) {
      return res.status(403).json({ msg: 'Acción no permitida' });
    }

    const eliminaCita = await cita.deleteOne();
    res.json(eliminaCita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la cita.' });
  }
};

export { crear, recibirCitas, recibirCita, actualizarCita, eliminarCita };
