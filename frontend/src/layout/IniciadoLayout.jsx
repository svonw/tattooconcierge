import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

const IniciadoLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = localStorage.getItem('userId');

    if (!sessionId) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default IniciadoLayout;
