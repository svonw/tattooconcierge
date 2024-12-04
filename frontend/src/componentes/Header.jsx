import { Link } from 'react-router-dom';
import CierreSesion from './CierreSesion';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-zinc-800 p-8 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-400">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto font-Cinzel text-zinc-200 font-semibold ">
        <Link to="/inicio" className="h-28">
          <Logo />
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
