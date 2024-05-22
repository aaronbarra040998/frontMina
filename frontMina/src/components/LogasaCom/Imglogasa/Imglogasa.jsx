// Logo.jsx
import './Imglogasa.css'; // Importa el archivo de estilos CSS
import Mina from '../../../assets/logasaMina.jpg'; // Ruta relativa a la ubicación del archivo Logo.jsx
export default function Imglogasa() {
  return (
      <img className="Imagenmina"  src={Mina} alt="Mina" /> // Usa la variable Logo para la ruta de la imagen
  );
}