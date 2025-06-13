import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/register", form);
            navigate("/login");
            alert("Registered User Successfully");
        } catch (error) {
            setErrors(error.response?.data?.errors || {});
        }
    };

    return (
        <div className="my-10">
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded-xl shadow-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">
                    Create Account
                </h2>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                    </div>
                    <input
                        name="name"
                        placeholder="Your full name"
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                    {errors.name && (
                        <p className="text-error text-sm mt-1">
                            {errors.name[0]}
                        </p>
                    )}
                </div>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                    </div>
                    <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                    {errors.email && (
                        <p className="text-error text-sm mt-1">
                            {errors.email[0]}
                        </p>
                    )}
                </div>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                    </div>
                    <input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                    {errors.password && (
                        <p className="text-error text-sm mt-1">
                            {errors.password[0]}
                        </p>
                    )}
                </div>

                <div className="form-control">
                    <div>
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                    </div>
                    <input
                        name="password_confirmation"
                        type="password"
                        placeholder="••••••••"
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                    {errors.password_confirmation && (
                        <p className="text-error text-sm mt-1">
                            {errors.password_confirmation[0]}
                        </p>
                    )}
                </div>

                <div className="form-control mt-6">
                    <button
                        type="submit"
                        className="btn bg-[#00bc7d] border-[#00bc7d] text-white w-full"
                    >
                        Register
                    </button>
                </div>
                <h2 className="text-center">Already han an account?</h2>
                <div className="form-control mt-6">
                    <a
                        href="/login"
                        className="btn bg-[#00bc7d] border-[#00bc7d] w-full block text-center text-white py-2 rounded"
                    >
                        Login
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Register;
