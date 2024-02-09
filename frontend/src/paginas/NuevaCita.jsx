import { useState } from 'react';

const NuevaCita = () => {
  const [formData, setFormData] = useState({
    proyecto: '',
    nombre: '',
    info: '',
    sesiones: 0,
    fecha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await fetch('http://localhost:4000/api/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la cita al servidor');
      }

      console.log('Cita enviada con éxito');
      e.target.reset();
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white border rounded-lg shadow-md my-2 font-Bar"
    >
      <div className="mb-4">
        <label className="block text-zinc-700 text-xl mb-2">
          Proyecto:
          <input
            type="text"
            name="proyecto"
            onChange={handleChange}
            className="w-full p-1 border rounded-md text-zinc-600"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-700 text-xl mb-2">
          Nombre:
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            className="w-full p-1 border rounded-md text-zinc-600"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-700 text-xl mb-2">
          Información:
          <textarea
            name="info"
            type="text"
            onChange={handleChange}
            className="w-full p-1 border rounded-md text-zinc-600"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-700 text-xl mb-2">
          Sesiones:
          <input
            type="number"
            name="sesiones"
            onChange={handleChange}
            className="w-full p-1 border rounded-md text-zinc-600"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-zinc-700 text-xl mb-2">
          Fecha:
          <input
            type="date"
            name="fecha"
            onChange={handleChange}
            className="w-full p-1 border rounded-md text-zinc-600"
          />
        </label>
      </div>
      <div className="grid m-auto">
        <button
          type="submit"
          className="bg-zinc-500 text-white p-2 rounded-md hover:bg-zinc-600"
        >
          Guardar Cita
        </button>
      </div>
    </form>
  );
};

export default NuevaCita;
