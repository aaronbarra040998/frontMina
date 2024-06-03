
import './Bodyhomeinto.css';
import Button1into from '../../../components/IntohomeCom/Buttonsintohome/button1into/button1into';
import Button2into from '../../../components/IntohomeCom/Buttonsintohome/button2into/button2into';
import Button3into from '../../../components/IntohomeCom/Buttonsintohome/button3into/button3into';
import Button4into from '../../../components/IntohomeCom/Buttonsintohome/button4into/button4into';

export default function Bodyhomeinto() {
    return (
        <div className="body-container">
            <div className="upper-content">
                <div className="image-and-button">
                    <div className="image-placeholder">imagen</div>
                    <Button1into />
                </div>
            </div>
            <div className="lower-content">
                <Button2into />
                <Button3into />
                <Button4into />
            </div>
        </div>
        
    );
}   