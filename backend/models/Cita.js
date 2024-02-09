import mongoose from 'mongoose';

const citaSchema = new mongoose.Schema({
  proyecto: { type: String },
  nombre: { type: String },
  info: { type: String },
  fecha: { type: Date, default: Date.now() },
  sesiones: { type: Number },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tatuador',
  },
});

const cita = mongoose.model('Cita', citaSchema);

export default cita;
