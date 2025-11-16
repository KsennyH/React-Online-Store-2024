import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';
import { HeaderTemplate } from "./HeaderTemplate";
import { Footer } from "./FooterTemplate";

export function MainLayout() {
    return(
        <>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="wrapper">
            <HeaderTemplate />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    );
}