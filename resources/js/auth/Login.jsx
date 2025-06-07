import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Get CSRF token
            await axios.get("/sanctum/csrf-cookie");

            // Submit login
            await axios.post("/login", {
                email,
                password,
            });

            navigate("/admin");
        } catch (err) {
            console.error(err);
            setError("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="my-24">
            <form
                onSubmit={handleLogin}
                className="max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">
                    Login to Your Account
                </h2>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                    </div>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                    </div>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered"
                        required
                    />
                </div>

                {error && (
                    <p className="text-error text-sm mt-1 text-center">
                        {error}
                    </p>
                )}

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
