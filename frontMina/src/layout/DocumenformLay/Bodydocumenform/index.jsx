import './Bodydocumenform.css';
import DocRow from '../../../components/DocumenformCom/DocRow/DocRow';
import Button from '../../../components/DocumenformCom/Button/Button';

export default function Bodydocumenform() {
    return (
        <div className="body-container">
            <div className="content">
                <div className="doc-rows">
                    <DocRow docNumber="N°1" />
                    <DocRow docNumber="N°2" />
                    <DocRow docNumber="N°3" />
                </div>
                <div className="image-container">
                    <div className="image-placeholder"></div>
                    <div className="zoom-button">
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className="continue-button">
                <Button text="Continuar" />
            </div>
        </div>
    );
}
