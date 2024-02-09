import { useEffect, useState } from 'react';

const Perfil = () => {
  const [tatuador, setTatuador] = useState({});

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const respuesta = await fetch(
          'http://localhost:4000/api/tatuador/perfil',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          },
        );

        if (!respuesta.ok) {
          console.log(respuesta.status);
          throw new Error('Error al obtener el perfil del tatuador');
        }

        const data = await respuesta.json();
        setTatuador(data.usuario);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPerfil();
  }, []);

  return (
    <div className="perfil-tatuador bg-zinc-50 border border-solid rounded-md p-4 shadow-md font-Bar text-center text-lg hover:shadow-xl max-w-md mx-auto my-5">
      <h1 className="text-2xl font-Cinzel mb-4 text-zinc-800 hover:animate-bounce font-medium">
        Perfil del Tatuador
      </h1>
      <p className="text-zinc-800 mb-2">
        Nombre:
        <span className="text-zinc-600 font-medium">
          {' '}
          {tatuador.nombre}
        </span>{' '}
      </p>
      <p className="text-zinc-800 mb-2">
        Email:
        <span className="text-zinc-600 font-medium">
          {' '}
          {tatuador.email}
        </span>{' '}
      </p>
      <p className="text-zinc-800 mb-2">
        Teléfono:
        <span className="text-zinc-600 font-medium">
          {' '}
          {tatuador.telefono}
        </span>{' '}
      </p>
      <p className="text-zinc-800 mb-2">
        Web: <span className="text-zinc-600 font-medium"> {tatuador.web}</span>
      </p>
    </div>
  );
};

export default Perfil;
