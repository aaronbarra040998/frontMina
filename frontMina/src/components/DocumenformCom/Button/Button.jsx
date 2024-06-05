import PropTypes from 'prop-types'; // Importa PropTypes para la validación de props
import './Button.css';

export default function Button({ text }) {
    return (
        <button className="general-button">{text}</button>
    );
}

// Validación de propTypes
Button.propTypes = {
    text: PropTypes.string.isRequired,
};
