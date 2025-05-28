import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch(`/api/events/${id}`)
            .then((res) => res.json())
            .then(setEvent)
            .catch(console.error);
    }, [id]);

    if (!event) return <p>Loading...</p>;

    return (
        <div>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            {event.image && (
                <img
                    src={event.image}
                    alt={event.title}
                    style={{ maxWidth: "400px" }}
                />
            )}
        </div>
    );
}

export default EventDetails;
