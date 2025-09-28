import logo from './header-logo.png';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo">
            <Link to={'/'} className="logo__link">
                <img className="logo__img" src={logo} alt="Logo"/>
            </Link>
        </div>
    );
}

export default Logo;