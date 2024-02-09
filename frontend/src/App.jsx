import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InicioLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import IniciadoLayout from './layout/IniciadoLayout';
import Inicio from './paginas/Inicio';
import Citas from './paginas/Citas';
import NuevaCita from './paginas/NuevaCita';
import Perfil from './paginas/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/inicio" element={<IniciadoLayout />}>
          <Route index element={<Inicio />} />
          <Route path="citas" element={<Citas />} />
          <Route path="nueva" element={<NuevaCita />} />
          <Route path="perfil" element={<Perfil />} />

          <Route path="cita/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
