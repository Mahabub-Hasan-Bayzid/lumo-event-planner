import axios from "axios";
import React, { useEffect, useState } from "react";

const Events = () => {
    let i = 1;
    const [events, setEvents] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        title: "",
        date: "",
        location: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        axios
            .get("/api/events")
            .then((res) => {
                setEvents(res.data);
            })
            .catch(console.error);
    }, []);

    // Delete Event
    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this event?"))
            return;

        axios
            .delete(`/api/events/${id}`)
            .then(() => {
                setEvents((prev) => prev.filter((event) => event.id !== id));
            })
            .catch((error) => {
                console.error("Failed to delete event:", error);
                alert("Error deleting event");
            });
    };

    // Start editing
    const handleEdit = (event) => {
        setEditingId(event.id);
        setEditForm({
            title: event.title,
            date: event.date,
            location: event.location,
            description: event.description,
            image: event.image,
        });
    };

    // Handle input in edit change
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    // Cancel editing
    const handleCancel = () => {
        setEditingId(null);
    };

    // Save edited event
    const handleSave = async (id) => {
        try {
            await axios.put(`/api/events/${id}`, editForm);
            setEvents((prev) =>
                prev.map((event) =>
                    event.id === id ? { ...event, ...editForm } : event
                )
            );
            setEditingId(null);
        } catch (error) {
            console.error("Failed to update event:", error);
            alert("Error updating event");
        }
    };

    return (
        <div className="p-6 w-full">
            <h2 className="text-2xl font-bold mb-6">Events</h2>

            <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
                <table className="table table-zebra w-full">
                    <thead className="bg-base-200">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id}>
                                {editingId === event.id ? (
                                    <>
                                        <td>
                                            <input
                                                name="title"
                                                value={editForm.title}
                                                onChange={handleEditChange}
                                                className="input input-bordered w-full"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                name="date"
                                                type="date"
                                                value={editForm.date}
                                                onChange={handleEditChange}
                                                className="input input-bordered w-full"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                name="location"
                                                value={editForm.location}
                                                onChange={handleEditChange}
                                                className="input input-bordered w-full"
                                            />
                                        </td>
                                        <td>
                                            <textarea
                                                name="description"
                                                value={editForm.description}
                                                onChange={handleEditChange}
                                                className="textarea textarea-bordered w-full"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                name="image"
                                                value={editForm.image}
                                                onChange={handleEditChange}
                                                className="input input-bordered w-full"
                                            />
                                        </td>
                                        <td className="space-x-2">
                                            <button
                                                className="btn btn-xs btn-success"
                                                onClick={() =>
                                                    handleSave(event.id)
                                                }
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="btn btn-xs btn-warning"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{i++}</td>
                                        <td>{event.title}</td>
                                        <td>{event.date}</td>
                                        <td>{event.location}</td>
                                        <td>{event.description}</td>
                                        <td>
                                            {event.image ? (
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td className="space-x-2">
                                            <button
                                                className="btn btn-xs btn-outline btn-primary hover:btn-secondary"
                                                onClick={() =>
                                                    handleEdit(event)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-xs btn-outline btn-error hover:btn-error-focus"
                                                onClick={() =>
                                                    handleDelete(event.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Events;
