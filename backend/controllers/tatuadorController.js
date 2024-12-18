import Tatuador from '../models/Tatuador.js';
import Cita from '../models/Cita.js';

//recibir datos perfil
const perfil = async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado',
      });
    }

    const tatuador = await Tatuador.findById(userId);

    if (!tatuador) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado',
      });
    }

    res.json({
      success: true,
      message: 'Información del usuario obtenida correctamente',
      usuario: {
        nombre: tatuador.nombre,
        email: tatuador.email,
        telefono: tatuador.telefono,
        web: tatuador.web,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};
// login
const acceso = async (req, res) => {
  console.log('Solicitud POST recibida en /api/tatuador/');
  const { email, password } = req.body;
  console.log('Datos recibidos:', req.body);

  // try {
  //   const user = await Tatuador.findOne({ email, password });

  //   if (!user) {
  //     console.log('No se encontró ningún usuario con esos datos'); // <-- Nuevo log para confirmar
  //     return res.status(401).json({
  //       success: false,
  //       message: 'Usuario y/o contraseña incorrectos',
  //     });
  //   }

  //   console.log('Usuario encontrado:', user); // <-- Si pasa aquí, el usuario se encontró
  //   req.session.userId = user._id;

  //   return res.json({
  //     success: true,
  //     message: 'Inicio de sesión correcto',
  //     userId: user._id,
  //   });
  // } catch (error) {
  //   console.error('Error en la consulta a la base de datos:', error); // <-- Log para el error específico
  //   res.status(500).json({ success: false, message: 'Error en el servidor' });
  // }

  try {
    const user = await Tatuador.findOne({ email, password });
    console.log('Resultado de la consulta:', user);
    if (user) {
      req.session.userId = user._id;

      return res.json({
        success: true,
        message: 'Inicio de sesión correcto',
        userId: user._id,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Usuario y/o contraseña incorrectos',
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};

//controlador pagina inicio
const inicio = async (req, res) => {
  try {
    const citas = await Cita.find({ user: req.session.userId });
    if (citas) {
      return res.json({
        success: true,
        message: 'Se han encontrado citas',
        citas,
      });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: 'no se han encontrado citas' });
  }
};

// cerrar sesion
const cierre = (req, res) => {
  req.session.destroy(error => {
    if (error) {
      return res
        .status(500)
        .json({ success: false, message: 'Error al cerrar sesión' });
    }
    return res.json({ success: true, message: 'Sesión cerrada correctamente' });
  });
};

export { perfil, inicio, acceso, cierre };
