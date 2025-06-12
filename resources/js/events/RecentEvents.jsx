import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function RecentEvents() {
    const [recentEvents, setRecentEvents] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => {
                const sorted = [...data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setRecentEvents(sorted.slice(0, 5));
            })
            .catch(console.error);
    }, []);

    return (
        <div className="py-16 bg-[#f7f7f7]">
            <h2
                className="text-4xl font-bold text-[#00BC7D] text-center mb-6"
                data-aos="fade-down"
            >
                Our Recent Events
            </h2>
            <div
                className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"
                data-aos="fade-down"
                data-aos-delay="100"
            ></div>

            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
                {recentEvents.length > 0 ? (
                    recentEvents.map((event, idx) => (
                        <div
                            key={event.id}
                            className="card bg-base-100 w-80 shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <figure className="h-44 overflow-hidden bg-gray-100">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </figure>
                            <div className="card-body p-5">
                                <h3 className="card-title text-lg font-semibold text-gray-800 mb-2">
                                    {event.title}
                                </h3>
                                <div className="flex flex-col text-sm text-gray-500 mb-3">
                                    <span>📅 {event.date}</span>
                                    <span>📍 {event.location}</span>
                                </div>
                                <div className="card-actions">
                                    <a
                                        href={`/events/${event.id}`}
                                        className="btn btn-sm text-white bg-[#00BC7D] border-[#00BC7D] hover:bg-[#00a76a]"
                                    >
                                        Event Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div
                        className="text-center text-gray-500 w-full"
                        data-aos="zoom-in"
                    >
                        <img
                            src="/images/no-events.png"
                            alt="No events"
                            className="mx-auto w-48 mb-4"
                        />
                        <p>No recent events available at the moment.</p>
                    </div>
                )}
            </div>

            {/* CTA Button */}
            <div
                className="text-center mt-12"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <a
                    href="/events"
                    className="btn bg-[#00BC7D] hover:bg-[#00a76a] text-white px-8 py-2 rounded-full shadow-lg transition"
                >
                    See All Events
                </a>
            </div>
        </div>
    );
}

export default RecentEvents;
