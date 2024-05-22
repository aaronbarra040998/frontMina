import LogoComponent from "../../../components/GeneralCom/Logo/Logo";
import Buttonheder from "../../../components/HomeCom/Buttonheder/Buttonheder";
import "./Hederhome.css";

export default function Hederhome() {
  return (
    <div className="headerhome">
      <div className="headerleft">
        <LogoComponent/>
      </div>
      <div className="headerrigth">
        <Buttonheder />
      </div>
    </div>
  );
}
