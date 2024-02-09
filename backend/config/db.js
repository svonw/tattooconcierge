import mongoose from 'mongoose';

const conectarDB = async uri => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log('conectado a la base de datos');
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

export default conectarDB;
