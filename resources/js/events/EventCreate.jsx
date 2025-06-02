import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiImage, FiUpload } from "react-icons/fi";

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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

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
        <section className="min-h-screen py-16 px-5 bg-gradient-to-b from-black/90 to-purple-900/80">
            <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-3">
                        Create New Event
                    </h2>
                    <p className="text-lg text-gray-300">
                        Fill in the details to list your event
                    </p>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                    whileHover={{ scale: 1.005 }}
                >
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2">
                                Event Title
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="e.g. Summer Music Festival"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                                    <FiCalendar className="text-purple-300" />{" "}
                                    Date
                                </label>
                                <input
                                    name="date"
                                    type="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                                    <FiMapPin className="text-purple-300" />{" "}
                                    Location
                                </label>
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="e.g. Central Park, NYC"
                                    value={form.location}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                placeholder="Tell people about your event..."
                                value={form.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2 flex items-center gap-2">
                                <FiImage className="text-purple-300" /> Image
                                URL
                            </label>
                            <input
                                name="image"
                                type="text"
                                placeholder="https://example.com/event-image.jpg"
                                value={form.image}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>

                        {form.image && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-2"
                            >
                                <p className="text-sm text-gray-400 mb-2">
                                    Image Preview:
                                </p>
                                <img
                                    src={form.image}
                                    alt="Preview"
                                    className="h-40 w-full object-cover rounded-lg border border-white/10"
                                />
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FiUpload /> Create Event
                        </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </section>
    );
}

export default EventCreate;
