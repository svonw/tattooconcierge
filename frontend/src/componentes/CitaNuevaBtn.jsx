import { Link } from 'react-router-dom';

const CitaBtn = () => {
  return (
    <Link to="/inicio/nueva">
      <button className="bg-amber-800 hover:shadow-inner hover:shadow-amber-950 rounded-md  font-bold py-2 px-4  mt-5 font-Ama text-zinc-100">
        NUEVA CITA
      </button>
    </Link>
  );
};
export default CitaBtn;
