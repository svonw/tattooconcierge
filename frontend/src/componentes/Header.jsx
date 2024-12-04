import { Link } from 'react-router-dom';
import CierreSesion from './CierreSesion';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="bg-zinc-800 p-8 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-400">
      <div className="container flex flex-wrap justify-between items-center mx-auto font-Cinzel text-zinc-200 font-semibold ">
        <Link to="/inicio" className="h-28">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
