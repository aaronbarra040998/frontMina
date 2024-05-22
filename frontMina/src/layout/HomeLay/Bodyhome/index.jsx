
import Imgbody from '../../../components/HomeCom/Imgbody/Imgbody'; 
import Textbody from '../../../components/HomeCom/Textbody/Textbody';
import Buttoncontac from '../../../components/GeneralCom/Buttoncontac/Buttoncontac'

import './Bodyhome.css';

export default function Bodyhome() {
    return (
        <div className="bodyhome"> 
            <div className='partleft'> 
                <Imgbody />
            </div>
            <div className='partrigth'>
                <Textbody />
                <Buttoncontac />
            </div>
        </div>
    );
}   