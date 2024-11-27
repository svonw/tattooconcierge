import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navegar = useNavigate();

  const handleLogin = async e => {
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
    <div className="container flex flex-col sm:flex-row justify-center items-center mx-auto  p-4 gap-4 sm:gap-10 md:gap-12 lg:gap-20">
      <div className="logo w-64 sm:w-96 m-8">
        <img src="../public/img/tattooSOLO2.png" alt="" />
      </div>

      <div className="mt-5 md:mt-0 bg-gray-50 shadow-md p-5 rounded-lg text-center sm:w-96">
        <h1 className="text-amber-900 font-medium font-Ama text-2xl">
          TATTOO CONCIERGE
        </h1>
        <form onSubmit={handleLogin}>
          <div className="my-4 flex items-center">
            <span className="material-icons text-gray-900">
              alternate_email
            </span>
            <input
              type="email"
              placeholder="Email"
              className="border-gray-300 border-2 w-full p-2 bg-white rounded-md font-thin text-sm "
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4 flex items-center">
            <span className="material-icons text-gray-900">lock</span>
            <input
              type="password"
              placeholder="Contraseña"
              className="border-gray-300 border-2 w-full p-2 bg-gray-50 rounded-md font-thin text-sm "
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              type="submit"
              value="INICIAR SESION"
              className="bg-amber-800 rounded-md p-2 my-3 font-Nuni font-medium text-white hover:cursor-pointer hover:bg-yellow-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
