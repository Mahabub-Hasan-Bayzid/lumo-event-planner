import { useState, useEffect } from "react";

function EventsList() {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setFilteredEvents(data);
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        const lowercased = searchTerm.toLowerCase();
        const filtered = events.filter(
            (event) =>
                event.title.toLowerCase().includes(lowercased) ||
                event.location.toLowerCase().includes(lowercased)
        );
        setFilteredEvents(filtered);
    }, [searchTerm, events]);

    const handleSearch = () => {
        const lowercased = searchTerm.toLowerCase();
        const filtered = events.filter(
            (event) =>
                event.title.toLowerCase().includes(lowercased) ||
                event.location.toLowerCase().includes(lowercased)
        );
        setFilteredEvents(filtered);
    };

    return (
        <div className="py-16 bg-gradient-to-b from-emerald-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-emerald-700 mb-6 tracking-tight">
                    Explore Upcoming Events
                </h2>
                <div className="w-24 h-1 mx-auto mb-10 bg-emerald-500 rounded-full"></div>

                {/* Search bar */}
                <div className="flex justify-center mb-10 gap-4">
                    <input
                        type="text"
                        placeholder="Search by title or location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered border-emerald-500 w-full max-w-md text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500"
                    >
                        Search
                    </button>
                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="card bg-white shadow-md hover:shadow-xl transition duration-300 ease-in-out rounded-2xl overflow-hidden"
                            >
                                <figure className="h-48 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full text-[#434141] object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </figure>
                                <div className="card-body p-6">
                                    <h3 className="card-title text-lg font-semibold text-gray-800 mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                        {event.description ||
                                            "No description available."}
                                    </p>
                                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                                        <span>📅 {event.date || "TBD"}</span>
                                        <span>
                                            📍 {event.location || "Unknown"}
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a
                                            href={`/events/${event.id}`}
                                            className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500"
                                        >
                                            Event Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center p-10 bg-white shadow rounded-xl">
                            <img
                                src="https://www.svgrepo.com/show/261857/empty-box.svg"
                                alt="No events"
                                className="w-24 mx-auto mb-4 opacity-70"
                            />
                            <p className="text-lg font-medium text-gray-600">
                                No events match your search.
                            </p>
                            <p className="text-sm text-gray-400">
                                Try changing the title or location.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventsList;
