import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import session from 'express-session';
import tatuadorRoutes from './routes/tatuadorRoutes.js';
import citaRoutes from './routes/citaRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();
conectarDB();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/api/tatuador', tatuadorRoutes);
app.use('/api/citas', citaRoutes);

//PUERTO DEL SERVIDOR
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor a la escucha del puerto:${PORT}`);
});
