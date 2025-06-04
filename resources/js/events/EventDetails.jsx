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
        <div className="max-w-4xl mx-auto p-6">
            <div className="card bg-base-100 shadow-xl">
                {event.image && (
                    <figure className="max-h-[400px] overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full object-cover"
                        />
                    </figure>
                )}
                <div className="card-body">
                    <h2 className="card-title text-3xl">{event.title}</h2>
                    <div className="text-sm text-gray-500 mb-2">
                        📅 {event.date} | 📍 {event.location}
                    </div>
                    <p className="text-base leading-relaxed">
                        {event.description}
                    </p>
                    <div className="card-actions mt-4">
                        <button className="btn bg-[#00BC7D] text-white">
                            Register
                        </button>
                        <button className="btn btn-outline">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
