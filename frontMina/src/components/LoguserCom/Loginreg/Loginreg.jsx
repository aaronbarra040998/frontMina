import './Loginreg.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

// Logo.jsx

export default function Loginreg() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleClick = () => {
    navigate('/reguser'); // Redirige a la ruta /logasa
  };

  return (
    <div className="login-title">
      <p>también puedes<button className='buttonhed' onClick={handleClick}>REGISTRARTE</button></p>
    </div>
  );
}
