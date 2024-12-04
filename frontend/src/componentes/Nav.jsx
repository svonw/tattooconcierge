import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CierreSesion from './CierreSesion';
import { useState } from 'react';

const NavLinks = () => {
  return (
    <>
      <NavLink to="citas"> Citas </NavLink>
      <NavLink to="perfil"> Perfil</NavLink>
      <CierreSesion />
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const altNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-1/3">
        <div className="hidden md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden text-center">
          <button onClick={altNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default Nav;
