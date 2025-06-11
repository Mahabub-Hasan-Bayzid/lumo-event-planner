import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const isActive = (path) =>
        location.pathname === path
            ? "text-emerald-500 font-bold"
            : "text-gray-600";

    return (
        <header className="w-full bg-base-100 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.1)]">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a
                                    href="/events"
                                    className={isActive("/events")}
                                >
                                    EVENTS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/events/create"
                                    className={isActive("/events/create")}
                                >
                                    CREATE EVENT
                                </a>
                            </li>
                            <li>
                                <a href="/about" className={isActive("/about")}>
                                    ABOUT US
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className={isActive("/contact")}
                                >
                                    CONTACT US
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/register"
                                    className={isActive("/register")}
                                >
                                    REGISTER
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="/" className="text-2xl font-bold ml-4">
                        LUMO <span className="text-emerald-500">EVENT</span>
                    </a>
                </div>
                <div className="navbar-right hidden lg:flex flex-1">
                    <ul className="menu menu-horizontal px-1 text-md text-bold gap-4">
                        <li>
                            <a href="/events" className={isActive("/events")}>
                                EVENTS
                            </a>
                        </li>
                        <li>
                            <a
                                href="/events/create"
                                className={isActive("/events/create")}
                            >
                                CREATE EVENT
                            </a>
                        </li>
                        <li>
                            <a href="/about" className={isActive("/about")}>
                                ABOUT US
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className={isActive("/contact")}>
                                CONTACT US
                            </a>
                        </li>
                        <li>
                            <a
                                href="/register"
                                className={isActive("/register")}
                            >
                                REGISTER
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
