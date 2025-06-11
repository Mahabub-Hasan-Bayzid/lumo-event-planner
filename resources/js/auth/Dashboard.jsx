import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get("/api/user")
            .then((res) => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    return (
        <div className="min-h-screen flex bg-base-100">
            {/* Sidebar */}
            <aside className="w-64 bg-base-200 shadow-md">
                <div className="p-4 text-center border-b border-base-300">
                    <h1 className="text-2xl font-bold text-primary">
                        Lumo Panel
                    </h1>
                </div>
                <nav className="menu p-4 text-base-content">
                    <ul>
                        <li>
                            <a className="hover:bg-base-300 rounded-lg">Home</a>
                        </li>
                        <li>
                            <a className="hover:bg-base-300 rounded-lg">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-base-300 rounded-lg">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-base-300 rounded-lg">
                                Events
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-end items-center space-x-4">
                    {user && (
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                    )}
                </div>

                <div className="mt-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
