// Buttonlogasa.jsx
import './button3into.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function Button3into() { // Rename the function to start with an uppercase letter
  const navigate = useNavigate(); // Get the navigation function
    const handleClick = () => {
    navigate('/documentosform'); // Redirect to the /logasa route
    };
    return (
        <div>
            <button className='button1' onClick={handleClick}>Documentos de Seguridad</button>

        </div>
    );
}
