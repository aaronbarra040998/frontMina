// Buttonlogasa.jsx
import './button1into.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function Button1into() { // Rename the function to start with an uppercase letter
  const navigate = useNavigate(); // Get the navigation function
    const handleClick = () => {
    navigate('/'); // Redirect to the /logasa route
    };
    return (
        <div>
            <button className='button1' onClick={handleClick}>Empezar Recorrido</button>

        </div>
    );
}
