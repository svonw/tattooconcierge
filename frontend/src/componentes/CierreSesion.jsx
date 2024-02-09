import { useNavigate } from 'react-router-dom';

const CierreSesion = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/api/tatuador/logout',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        },
      );

      if (response.ok) {
        localStorage.removeItem('userId');

        navigate('/');
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="uppercase text-yellow-800 text-sm p-1 hover:shadow-inner hover:shadow-yellow-800 rounded-md"
    >
      Cerrar Sesión
    </button>
  );
};

export default CierreSesion;
