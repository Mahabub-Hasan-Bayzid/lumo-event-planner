import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const isActive = (path) =>
        location.pathname === path
            ? "text-emerald-500 font-semibold"
            : "text-gray-700 dark:text-gray-300 hover:text-emerald-500";

    const navLinks = [
        { label: "EVENTS", href: "/events" },
        { label: "CALENDAR", href: "/calendar" },
        { label: "CREATE EVENT", href: "/events/create" },
        { label: "ABOUT US", href: "/about" },
        { label: "CONTACT US", href: "/contact" },
        { label: "REGISTER", href: "/register" },
    ];

    return (
        <header className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="/"
                        className="text-2xl font-bold text-gray-800 dark:text-white"
                    >
                        LUMO <span className="text-emerald-500">EVENT</span>
                    </a>

                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className={isActive(href)}
                            >
                                {label}
                            </a>
                        ))}
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </nav>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-emerald-600 dark:text-gray-200"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 shadow-md">
                    <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={isActive(href)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button onClick={toggleTheme} className="mt-2">
                                {theme === "light"
                                    ? "🌙 Dark Mode"
                                    : "☀️ Light Mode"}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
