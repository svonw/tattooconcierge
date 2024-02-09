import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navegar = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:4000/api/tatuador/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await respuesta.json();
      console.log(data);
      if (data.success) {
        console.log('Inicio de sesión exitoso', data.message);
        localStorage.setItem('userId', data.userId);
        navegar('/inicio');
        return;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error al iniciar sesión', error.message);
    }

    console.log('iniciando sesion');
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-amber-900 font-medium font-Cinzel text-3xl">
          Inicia sesión y administra tus citas:
        </h1>
        <img
          src="../public/img/TATTOO_FULL.png"
          alt=""
          className="object-contain h-48 w-96"
        />
      </div>

      <div className="mt-5 md:mt-0 bg-gray-50 shadow-md p-5 rounded-lg">
        <form onSubmit={handleLogin}>
          <div className="my-4">
            <label className="text-gray-900 block text-1xl text-center font-Cinzel mt-3">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border-gray-300 border-2 w-full p-2 mt-3 bg-white rounded-md font-thin text-sm "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="text-gray-900 block text-1xl text-center font-Cinzel ">
              CONTRASEÑA
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border-gray-300 border-2 w-full p-2 mt-3 bg-gray-50 rounded-md font-thin text-sm "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              type="submit"
              value="INICIAR SESION"
              className="bg-yellow-600 rounded-md p-2 my-3 font-Cinzel font-medium text-white hover:cursor-pointer hover:bg-yellow-700"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
