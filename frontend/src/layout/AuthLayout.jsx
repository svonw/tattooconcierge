import { Outlet } from 'react-router-dom';
import Footer from '../componentes/Footer';

const InicioLayout = () => {
  return (
    <>
      <main className="container m-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default InicioLayout;
