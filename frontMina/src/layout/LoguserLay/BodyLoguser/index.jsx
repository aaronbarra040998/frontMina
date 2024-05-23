import Imgloguser from '../../../components/LoguserCom/Imgloguser/Imgloguser';
import Logintitle from '../../../components/LoguserCom/Logintitle/Logintitle';
import Loginform from '../../../components/LoguserCom/Loginform/Loginform';
import Loginreg from '../../../components/LoguserCom/Loginreg/Loginreg';

// import Textlogasa from '../../../components/LogasaCom/Textlogasa/Textlogasa';
// import Buttonlogasa from '../../../components/LogasaCom/buttonslogasa/buttonslogasa'; // Asegúrate de que esta ruta sea correcta

import './BodyLoguser.css';

export default function Bodyloguser() {
    return (
        <div className="bodyhome">
            <div className='partleft'> 
                <Imgloguser />
            </div>
            <div className='partrigth'> 
                <div className="login-title">
                    <Logintitle />
                    <Loginform />
                    <Loginreg />
                </div>
            </div>
        </div>
    );
}
