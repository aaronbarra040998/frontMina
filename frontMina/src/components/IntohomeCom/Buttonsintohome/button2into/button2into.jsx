// Buttonlogasa.jsx
import './button2into.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function Button2into() { // Rename the function to start with an uppercase letter
  const navigate = useNavigate(); // Get the navigation function
    const handleClick = () => {
    navigate('/'); // Redirect to the /logasa route
    };
    return (
        <div>
            <button className='button1' onClick={handleClick}>Operación de Planta Piloto</button>

        </div>
    );
}
