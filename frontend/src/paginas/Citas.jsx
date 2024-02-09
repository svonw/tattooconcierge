import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Citas = () => {
  const [citas, setCitas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevosDatos, setNuevosDatos] = useState({
    _id: '',
    proyecto: '',
    info: '',
    sesiones: 0,
    fecha: '',
  });

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
        setCitas(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleEditarCita = (citaId) => {
    const citaActual = citas.find((cita) => cita._id === citaId);
    console.log(citaActual);

    if (citaActual) {
      setNuevosDatos({
        _id: citaActual._id,
        proyecto: citaActual.proyecto,
        nombre: citaActual.nombre,
        info: citaActual.info,
        sesiones: citaActual.sesiones,
        fecha: citaActual.fecha,
      });

      setModalOpen(true);
    }
  };

  const handleGuardarEdicion = async (citaId) => {
    try {
      console.log(nuevosDatos._id);
      const respuesta = await fetch(
        `http://localhost:4000/api/citas/${nuevosDatos._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',

          body: JSON.stringify(nuevosDatos),
        },
      );

      if (!respuesta.ok) {
        throw new Error('Error al actualizar la cita');
      }

      const responseData = await respuesta.json();
      if (responseData.msg && responseData.msg === 'Accion no permitida') {
        console.log('Acción no permitida. Usuario no autorizado.');
        return;
      }

      const citasActualizadas = citas.map((cita) =>
        cita._id === citaId ? { ...cita, ...nuevosDatos } : cita,
      );

      setCitas(citasActualizadas);

      setModalOpen(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleEliminarCita = async (citaId) => {
    try {
      const respuesta = await fetch(
        `http://localhost:4000/api/citas/${citaId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',

          body: JSON.stringify(nuevosDatos),
        },
      );
      if (!respuesta.ok) {
        throw new Error('Error al eliminar la cita');
      }

      const citasActualizadas = citas.filter((cita) => cita._id != citaId);
      setCitas(citasActualizadas);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="grid m-auto">
      <Link to="/inicio/nueva" className="m-auto">
        <button className="bg-yellow-600 hover:shadow-inner hover:shadow-yellow-700 rounded-md  font-bold py-2 px-4 mt-5 font-Cinzel text-zinc-700">
          nueva cita
        </button>
      </Link>
      <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-Bar font-light">
        {citas.map((cita) => (
          <div
            key={cita._id}
            className="cita-tarjeta rounded-md shadow-md bg-white m-10 p-4 border border-gray-300 hover:shadow-xl"
          >
            <p className="text-xl uppercase mb-2">
              Proyecto:
              <span className="text-zinc-600 font-normal  lowercase text-lg">
                {cita.proyecto}
              </span>
            </p>
            <p className="text-gray-600 mb-4">Nombre: {cita.nombre}</p>
            <p className="text-gray-600 mb-4">Información: {cita.info}</p>
            <div className="flex items-center mb-4">
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
              <p className="text-gray-700 mb-4">
                Fecha:
                {new Date(cita.fecha).toLocaleDateString()}
              </p>
            </div>
            <p className="text-gray-600 mb-4">Sesiones: {cita.sesiones}</p>
            <div className="flex justify-between">
              {' '}
              <button
                onClick={() => handleEditarCita(cita._id)}
                className="bg-zinc-500 text-zinc-300 p-2 rounded-md hover:scale-105"
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleEliminarCita(cita._id)}
                className="bg-red-700 text-zinc-300 p-2 rounded-md hover:scale-105"
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {modalOpen && (
          <div className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg w-1/2 h-1/2 text-center font-medium text-zinc-800">
              <form className="flex flex-col items-center ">
                <label className="uppercase">
                  Proyecto:
                  <input
                    className="w-full m-2 p-2 mt-0 bg-zinc-200 rounded-md font-light text-zinc-600"
                    type="text"
                    value={nuevosDatos.proyecto}
                    onChange={(e) =>
                      setNuevosDatos({
                        ...nuevosDatos,
                        proyecto: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="uppercase">
                  Nombre:
                  <input
                    className="w-full m-2 p-2 bg-zinc-200 rounded-md font-light text-zinc-600"
                    type="text"
                    value={nuevosDatos.nombre}
                    onChange={(e) =>
                      setNuevosDatos({
                        ...nuevosDatos,
                        nombre: e.target.value,
                      })
                    }
                  />
                </label>
                <label className="uppercase">
                  Información:
                  <textarea
                    className="w-full h-20 p-2 bg-zinc-200 rounded-md font-light text-zinc-600"
                    type="text"
                    value={nuevosDatos.info}
                    onChange={(e) =>
                      setNuevosDatos({ ...nuevosDatos, info: e.target.value })
                    }
                  />
                </label>
                <label className="uppercase">
                  Sesiones:
                  <input
                    className="m-2 p-2 bg-zinc-200 rounded-md font-light text-zinc-600"
                    type="number"
                    value={nuevosDatos.sesiones}
                    onChange={(e) =>
                      setNuevosDatos({
                        ...nuevosDatos,
                        sesiones: e.target.value,
                      })
                    }
                  />
                </label>

                <label className="uppercase">
                  Fecha:{' '}
                  <input
                    className="m-2 p-2 bg-zinc-200 rounded-md"
                    type="date"
                    value={nuevosDatos.fecha}
                    onChange={(e) =>
                      setNuevosDatos({ ...nuevosDatos, fecha: e.target.value })
                    }
                  />
                </label>
                <div className="flex justify-between gap-5">
                  <button
                    type="button"
                    onClick={() => handleGuardarEdicion(nuevosDatos._id)}
                    className="bg-zinc-200 rounded-md px-2 text-lg font-normal"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="bg-zinc-200 rounded-md px-2 text-lg font-normal text-red-600"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Citas;
