// Logo.jsx
import './Logo.css'; // Importa el archivo de estilos CSS
import LogoImage from '../../../assets/aquitulogo.png'; // Ruta relativa a la ubicación del archivo Logo.jsx
export default function LogoComponent() {
  return (
      <a href="/">
        <img className="Logoheder" src={LogoImage} alt="Logo" /> 
      </a>
  );
}