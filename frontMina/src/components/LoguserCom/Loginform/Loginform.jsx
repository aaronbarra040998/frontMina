import './Loginform.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate 

export default function Loginform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleClick = () => {
    navigate('/IntoHome'); // Redirige a la ruta /logasa
  };
  return (
    <div className="login-title">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit"onClick={handleClick}>INGRESAR</button>
      </form>
    </div>
  );
}

