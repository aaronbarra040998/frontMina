import Imgloguser from '../../../components/LoguserCom/Imgloguser/Imgloguser';
import Regtitle from '../../../components/ReguserCom/Regtitle/Regtitle';
import Regform from '../../../components/ReguserCom/Regform/Regform';
import Reglogin from '../../../components/ReguserCom/Reglogin/Reglogin';
// import Loginform from '../../../components/LoguserCom/Loginform/Loginform';
// import Loginreg from '../../../components/LoguserCom/Loginreg/Loginreg';

import './BodyReguser.css';

export default function Bodyreguser() {
    return (
        <div className="bodyhome">
            <div className='partleft'> 
                <Imgloguser />
            </div>
            <div className='partrigth'> 
                <div className="regis-box">
                    <Regtitle />
                    <Regform />
                    <Reglogin />
                    {/* <Loginreg /> */}
                </div>
            </div>
        </div>
    );
}
