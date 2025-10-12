import HeaderTemplate from "@/components/header/HeaderTemplate";

export default function Layout({ children }) {
    return (
        <>
            <HeaderTemplate />
            <main className="main">
                {children}
            </main>
        </>
    );
}