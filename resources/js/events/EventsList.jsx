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
        <div className="my-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Events List
                </h2>
                <div className="w-24 h-1 mx-auto mb-6 bg-[#00BC7D]"></div>

                {/* Search bar */}
                <div className="flex justify-center mb-10 gap-2">
                    <input
                        type="text"
                        placeholder="Search by title or location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered border-[#00BC7D] w-full max-w-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn bg-[#00bc7d] text-white"
                    >
                        Search
                    </button>
                </div>

                {/* Event Cards */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="card bg-base-100 w-96 shadow-sm overflow-hidden"
                            >
                                <figure className="h-48 w-full overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {event.title}
                                    </h2>
                                    <p>{event.description}</p>
                                    <div className="card-actions">
                                        <a href={`/events/${event.id}`}>
                                            <button className="btn bg-[#00bc7d] text-white">
                                                Event Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 w-full">
                            No events found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventsList;
