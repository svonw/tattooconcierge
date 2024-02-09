const checkAutenticado = (req, res, next) => {
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ success: false, message: 'Acceso no autorizado' });
  }

  next();
};
export default checkAutenticado;
