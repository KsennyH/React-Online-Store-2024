import logo from './header-logo.png';
import { Link } from "react-router-dom";

function Logotype() {
    return (
        <Link to={'/'}>
            <img src={logo} alt="Logo"/>
        </Link>
    );
}

export default Logotype;