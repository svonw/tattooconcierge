import { Outlet } from 'react-router-dom';

const InicioLayout = () => {
  return (
    <>
      <main className="container mx-auto p-5 grid gap-x-5 sm:grid-cols-1 md:grid md:grid-cols-2 mt-20">
        <Outlet />
      </main>
    </>
  );
};

export default InicioLayout;
