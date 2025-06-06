import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            navigate("/events");
        } else {
            alert("Failed to create event");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Create An Event
            </h2>

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
                            <button type="submit" className="btn btn-primary">
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
