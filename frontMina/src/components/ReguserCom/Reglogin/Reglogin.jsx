import './Reglogin.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

// Logo.jsx

export default function Reglogin() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleClick = () => {
    navigate('/loguser'); // Redirige a la ruta /logasa
  };

  return (
    <div className="login-title">
      <p>Si tienes una cuenta puedes<button className='buttonhed' onClick={handleClick}>Logearte</button></p>
    </div>
  );
}
