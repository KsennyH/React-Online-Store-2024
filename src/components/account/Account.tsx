import { Outlet } from "react-router-dom";
import AccountHeader from "../account-header/AccountHeader";
import { Footer } from "@/app/layout/FooterTemplate";

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