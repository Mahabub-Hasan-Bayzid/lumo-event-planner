import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLayout() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
            .post("/logout")
            .then(() => {
                setUser(null);
                navigate("/login");
            })
            .catch((err) => {
                console.error("Logout failed:", err);
            });
    };

    useEffect(() => {
        axios
            .get("/api/user")
            .then((res) => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    // Active NavLink
    const activeClass = "bg-black text-primary-content rounded-lg";

    return (
        <div className="min-h-screen flex bg-base-100">
            {/* Sidebar */}
            <aside className="w-64 bg-[#00bc7d] shadow-md flex flex-col">
                <div className="p-4 text-left border-b border-base-300">
                    <h1 className="text-2xl font-bold text-white">
                        Lumo Panel
                    </h1>
                </div>
                <nav className="menu p-4 text-white flex-1">
                    <ul>
                        <li>
                            <NavLink
                                to="/admin"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClass
                                        : "hover:bg-black rounded-lg"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClass
                                        : "hover:bg-black rounded-lg"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClass
                                        : "hover:bg-black rounded-lg"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/events"
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClass
                                        : "hover:bg-black rounded-lg"
                                }
                            >
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? activeClass
                                        : "hover:bg-black rounded-lg"
                                }
                            >
                                Visit To Website
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-end items-center space-x-4">
                    {user && (
                        <>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-[#00bc7d] ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${user.name}`}
                                            alt={user.name}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-sm text-base-content/70">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn btn-sm btn-outline bg-[#00bc7d] border-[#00bc7d] text-white"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                <div className="mt-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AdminLayout;
