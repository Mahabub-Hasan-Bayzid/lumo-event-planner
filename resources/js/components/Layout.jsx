import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <div style={{ padding: "20px" }}>
            <Header />
            {/* Render matched child routes here */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
