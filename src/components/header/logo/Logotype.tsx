import { Link } from "react-router-dom";

function Logotype() {
    return (
        <Link to='/'>
            <img src="/header-logo.png" alt="Logo"/>
        </Link>
    );
}

export default Logotype;