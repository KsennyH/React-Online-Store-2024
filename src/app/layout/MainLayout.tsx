import Footer from "@/components/footer/Footer";
import HeaderTemplate from "@/components/header/HeaderTemplate";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

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