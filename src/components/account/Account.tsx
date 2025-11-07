import { Outlet } from "react-router-dom";
import AccountHeader from "../account-header/AccountHeader";
import Footer from "../footer/Footer";

export function Account () {
    return (
        <div className="wrapper">
            <AccountHeader />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}