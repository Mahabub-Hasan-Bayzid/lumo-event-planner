import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RecentEvents() {
    const [recentEvents, setRecentEvents] = useState([]);

    useEffect(() => {
        axios
            .get("/api/events")
            .then((res) => {
                const sorted = [...res.data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setRecentEvents(sorted.slice(0, 4));
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div className="py-16 bg-[#f7f7f7]">
            <h2
                className="text-4xl font-bold text-center mb-6"
                data-aos="fade-up"
            >
                Our Recent Events
            </h2>
            <div
                className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"
                data-aos="fade-up"
                data-aos-delay="100"
            ></div>

            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {recentEvents.map((event, index) => (
                    <div
                        key={event.id}
                        className="card bg-base-100 w-76 shadow-md"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <figure className="h-40 overflow-hidden group">
                            <a href={`events/${event.id}`}>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </a>
                        </figure>

                        <div className="card-body">
                            <a href={`events/${event.id}`}>
                                <h3 className="card-title text-lg hover:text-[#00BC7D]">
                                    {event.title}
                                </h3>
                            </a>
                            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mt-2">
                                <p>📅 {event.date}</p>
                                <p>📍 {event.location}</p>
                            </div>
                            <div className="card-actions justify-start mt-4">
                                <a
                                    href={`/events/${event.id}`}
                                    className="btn btn-sm text-white bg-[#00BC7D] border-[#00BC7D]"
                                >
                                    Event Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="mt-10 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <a
                    href="/events"
                    className="btn bg-[#00BC7D] text-white px-6 py-2 text-lg border-[#00BC7D]"
                >
                    View All Events
                </a>
            </div>
        </div>
    );
}

export default RecentEvents;
