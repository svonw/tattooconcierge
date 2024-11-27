import { Link } from 'react-router-dom';
import CierreSesion from './CierreSesion';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-zinc-300 py-2 sticky top-0 z-[28] mx-auto flex w-full items-center justify-between border-gray-500">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto font-Cinzel text-zinc-600 font-semibold ">
        <Link to="/inicio" className="h-28">
          <img
            src="../public/img/tattooSOLO2.png"
            alt=""
            className="logo w-full h-full object-contain"
          />
        </Link>

        <nav className="flex flex-col items-center md:flex-row gap-4 mt-4 md:mt-0 font-Ama text-lg">
          <Link
            to="citas"
            className="uppercase font-semibold  p-1 hover:shadow-inner hover:shadow-zinc-400 rounded-md"
          >
            Mis citas
          </Link>

          <Link
            to="perfil"
            className="uppercase font-semibold  p-1 hover:shadow-inner hover:shadow-zinc-400 rounded-md"
          >
            Perfil
          </Link>
          <CierreSesion />
        </nav>
      </div>
    </header>
  );
};

export default Header;
