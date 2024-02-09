import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Inicio = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await fetch('http://localhost:4000/api/citas', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!respuesta.ok) {
          console.log(respuesta.status);
          throw new Error('Error al obtener citas');
        }

        const data = await respuesta.json();

        const citasOrdenadas = data.sort(
          (a, b) => new Date(a.fecha) - new Date(b.fecha),
        );

        const tresCitasProximas = citasOrdenadas.slice(0, 3);

        setCitas(tresCitasProximas);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid ">
      <div className="grid m-auto">
        <Link to="/inicio/nueva">
          <button className="bg-yellow-600 hover:shadow-inner hover:shadow-yellow-700 rounded-md  font-bold py-2 px-4  mt-5 font-Cinzel text-zinc-700">
            nueva cita
          </button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  font-Bar font-light">
        {citas.map((cita) => (
          <div
            key={cita._id}
            className="cita-tarjeta bg-white m-10 p-4 rounded-md shadow-md border border-gray-300 hover:shadow-lg"
          >
            <p className="text-xl uppercase mb-2">
              Proyecto:{' '}
              <span className="text-zinc-600 font-normal text-lg lowercase">
                {cita.proyecto}
              </span>
            </p>
            <p className="text-gray-600 mb-4">Nombre: {cita.nombre}</p>
            <p className="text-gray-600 mb-4">Sesiones: {cita.sesiones}</p>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p className="text-gray-600 mb-4">
                Fecha: {new Date(cita.fecha).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
