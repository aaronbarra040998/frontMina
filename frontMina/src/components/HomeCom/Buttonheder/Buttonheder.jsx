// Buttonheder.jsx
import './Buttonheder.css'; // Importa el archivo de estilos CSS
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

export default function Buttonheder() {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleClick = () => {
    navigate('/logasa'); // Redirige a la ruta /logasa
  };

  return (
    <button className='buttonhed' onClick={handleClick}>Ingresar</button>
  );
}
