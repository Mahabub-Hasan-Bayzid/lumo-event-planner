import { useState, useEffect } from "react";

function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then(setEvents)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p>
                            {event.date} — {event.location}
                        </p>
                        <p>{event.description}</p>
                        {event.image && (
                            <img
                                src={event.image}
                                alt={event.title}
                                style={{ maxWidth: "300px" }}
                            />
                        )}
                        <p>
                            <a href={`/events/${event.id}`}>Event Details</a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventsList;
