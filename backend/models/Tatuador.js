import mongoose from 'mongoose';

const tatuadorSchema = new mongoose.Schema({
  nombre: { type: String },
  email: { type: String },
  password: { type: String },
  telefono: { type: String },
  web: { type: String },
});

const tatuador = mongoose.model('Tatuador', tatuadorSchema);

export default tatuador;
