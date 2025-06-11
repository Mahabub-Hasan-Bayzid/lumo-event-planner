import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`/api/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEvent(data);
                // fetch weather using event.location
                if (data.location) {
                    fetch(
                        `/api/weather?city=${encodeURIComponent(data.location)}`
                    )
                        .then((res) => res.json())
                        .then(setWeather)
                        .catch(console.error);
                }
            })
            .catch(console.error);
    }, [id]);

    if (!event) return <p>Loading...</p>;
    // Current location to use in Google Maps
    const mapQuery = encodeURIComponent(event.location);

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

                    {/* Weather Info */}
                    {weather && weather.main ? (
                        <div className="mt-4 p-4 bg-blue-100 rounded">
                            <h4 className="text-lg font-semibold mb-1">
                                🌤️ Weather in {event.location}
                            </h4>
                            <p>Temperature: {weather.main.temp} °C</p>
                            <p>Condition: {weather.weather[0].description}</p>
                        </div>
                    ) : (
                        <p className="mt-4 text-gray-500">
                            Weather info not available
                        </p>
                    )}
                    {/* Google Map iframe */}
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0, marginTop: "20px" }}
                        src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                        allowFullScreen
                    ></iframe>

                    <div className="card-actions mt-6">
                        <button className="btn bg-[#00BC7D] text-white">
                            <a href="/register">Register</a>
                        </button>
                        <button className="btn btn-outline">Share</button>
                        <button className="btn bg-[#00BC7D] text-white">
                            <a href="/events">Back To All Events</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
