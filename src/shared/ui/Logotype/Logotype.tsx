import { JSX } from "react";
import { Link } from "react-router-dom";

export function Logotype(): JSX.Element {
    return (
        <Link to='/'>
            <img src="/header-logo.png" alt="Logo"/>
        </Link>
    );
}