import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de props
import './DocRow.css';

export default function DocRow({ docNumber }) {
    const [checked, setChecked] = useState(false);

    const handleDocClick = () => {
        setChecked(true);
    };

    return (
        <div className="doc-row">
            <button className="view-button">👁</button>
            <button className="doc-button" onClick={handleDocClick}>Doc {docNumber}</button>
            <button className="check-button">{checked ? '✔️' : '☐'}</button>
        </div>
    );
}

// Validación de propTypes
DocRow.propTypes = {
    docNumber: PropTypes.string.isRequired,
};
