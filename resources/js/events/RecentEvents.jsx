import { useEffect, useState } from "react";

function RecentEvents() {
    const [recentEvents, setRecentEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setRecentEvents(sorted.slice(0, 4));
            })
            .catch(console.error);
    }, []);

    return (
        <div className="py-16 bg-[#f7f7f7]">
            <h2 className="text-4xl font-bold text-center mb-6">
                Our Recent Events
            </h2>
            <div className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"></div>
            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {recentEvents.map((event) => (
                    <div
                        key={event.id}
                        className="card bg-base-100 w-76 shadow-md"
                    >
                        <figure className="h-40 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg">
                                {event.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                📅 {event.date}
                            </p>
                            <div className="card-actions justify-start">
                                <a
                                    href={`/events/${event.id}`}
                                    className="btn btn-sm btn-primary bg-[#00BC7D] border-[#00BC7D]"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentEvents;
