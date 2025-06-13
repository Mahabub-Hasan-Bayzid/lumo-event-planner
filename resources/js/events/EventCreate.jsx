import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EventCreate() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        date: "",
        location: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie", { withCredentials: true });

            await axios.post("/api/events", form, { withCredentials: true });

            navigate("/events");
            alert("Event Successfully Created ");
        } catch (error) {
            if (error.response?.data?.message) {
                alert("Failed to create event: " + error.response.data.message);
            } else {
                alert("Failed to create event: " + error.message);
            }
        }
    };
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-center pt-10 mb-6">
                Create An Event
            </h2>
            <div className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"></div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />

                        <input
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            min={today}
                            className="input input-bordered w-full"
                        />

                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            value={form.location}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />

                        <textarea
                            name="description"
                            placeholder="Description"
                            value={form.description}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                        />

                        <input
                            name="image"
                            type="text"
                            placeholder="Image URL"
                            value={form.image}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />

                        <div className="card-actions justify-end">
                            <button
                                type="submit"
                                className="btn bg-[#00bc7d] text-white"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EventCreate;
