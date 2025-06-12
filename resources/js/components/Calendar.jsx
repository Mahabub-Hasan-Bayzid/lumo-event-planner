import { useState, useEffect } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Calendar() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then(setEvents)
            .catch(console.error);
    }, []);

    useEffect(() => {
        const filtered = events.filter(
            (event) =>
                new Date(event.date).toDateString() ===
                selectedDate.toDateString()
        );
        setEventsOnSelectedDate(filtered);
    }, [selectedDate, events]);

    const tileContent = ({ date, view }) => {
        if (view === "month") {
            const dayEvents = events.filter(
                (event) =>
                    new Date(event.date).toDateString() === date.toDateString()
            );

            if (dayEvents.length > 0) {
                return (
                    <div className="mt-1 flex flex-col items-center gap-0.5 px-1">
                        {dayEvents.slice(0, 2).map((event) => (
                            <span
                                key={event.id}
                                className="text-[10px] px-2 py-0.5 bg-emerald-500 text-white rounded-md w-full text-center truncate shadow-sm"
                                title={event.title}
                            ></span>
                        ))}
                        {dayEvents.length > 2 && (
                            <span className="text-[10px] text-gray-500">
                                +{dayEvents.length - 2} more
                            </span>
                        )}
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen">
            <h2
                className="text-3xl font-bold text-emerald-700 mb-8 text-center"
                data-aos="fade-down"
            >
                📅 Event Calendar
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Calendar Card */}
                <div
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                    data-aos="fade-right"
                >
                    <div className="p-2 sm:p-4">
                        <ReactCalendar
                            onChange={setSelectedDate}
                            value={selectedDate}
                            tileContent={tileContent}
                            next2Label={null}
                            prev2Label={null}
                            className="w-full"
                            tileClassName="hover:bg-emerald-50 transition duration-200 ease-in-out rounded-lg"
                        />
                    </div>
                </div>

                {/* Events Details Card */}
                <div
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                    data-aos="fade-left"
                >
                    <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
                        Events on {selectedDate.toDateString()}
                    </h3>

                    {eventsOnSelectedDate.length > 0 ? (
                        <ul className="space-y-5">
                            {eventsOnSelectedDate.map((event) => (
                                <li
                                    key={event.id}
                                    className="p-5 border border-emerald-200 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300"
                                    data-aos="fade-up"
                                >
                                    <h4 className="text-lg font-semibold text-emerald-700">
                                        {event.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        📍 {event.location}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        🗓️ {new Date(event.date).toDateString()}
                                    </p>
                                    {event.description && (
                                        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                                            {event.description}
                                        </p>
                                    )}
                                    {event.image && (
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="mt-4 rounded-lg shadow max-h-40 object-cover w-full"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic" data-aos="fade-in">
                            No events on this date.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
