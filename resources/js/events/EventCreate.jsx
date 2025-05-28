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
        <div>
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />
                <input
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default EventCreate;
