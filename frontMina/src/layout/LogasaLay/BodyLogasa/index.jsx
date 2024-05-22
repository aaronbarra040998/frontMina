import Imglogasa from '../../../components/LogasaCom/Imglogasa/Imglogasa';
import Textlogasa from '../../../components/LogasaCom/Textlogasa/Textlogasa';

import Buttonlogasa from '../../../components/LogasaCom/buttonslogasa/buttonslogasa'; // Asegúrate de que esta ruta sea correcta

import './Bodylogasa.css';

export default function Bodylogasa() {
    return (
        <div className="bodyhome">
            <div className='partleft'> 
                <Imglogasa />
            </div>
            <div className='partrigth'> 
                <Textlogasa />
                <Buttonlogasa />
            </div>
        </div>
    );
}
