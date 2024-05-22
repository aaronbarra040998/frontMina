// Buttonlogasa.jsx
import './buttonslogasa.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function Buttonslogasa() { // Rename the function to start with an uppercase letter
  const navigate = useNavigate(); // Get the navigation function
    const handleClick = () => {
    navigate('/loguser'); // Redirect to the /logasa route
    };
    return (
        <div>
            <button className='button1' onClick={handleClick}>alumno</button>
            <button className='button2'>profesor</button>
        </div>
    );
}
