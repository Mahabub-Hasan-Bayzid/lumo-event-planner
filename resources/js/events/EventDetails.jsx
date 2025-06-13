import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipboardCheck, Share2, ArrowLeft } from "lucide-react";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [weather, setWeather] = useState(null);

    const fallbackImage =
        "https://placehold.co/800x400?text=No+Image+Available";

    useEffect(() => {
        fetch(`/api/events/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setEvent(data);
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

    if (!event) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                Loading event details...
            </div>
        );
    }

    const mapQuery = encodeURIComponent(event.location);

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="card bg-white shadow-2xl rounded-lg overflow-hidden">
                    <figure className="max-h-[400px] overflow-hidden">
                        <img
                            src={event.image || fallbackImage}
                            alt={event.title}
                            onError={(e) => (e.target.src = fallbackImage)}
                            className="w-full object-cover transition-all duration-300"
                        />
                    </figure>

                    <div className="card-body p-6">
                        <h2 className="card-title text-3xl text-emerald-700 font-bold mb-2">
                            {event.title}
                        </h2>
                        <div className="text-sm text-gray-500 mb-4 flex gap-4 items-center">
                            <span>📅 {event.date}</span>
                            <span>📍 {event.location}</span>
                        </div>
                        <p className="text-base leading-relaxed text-gray-700 mb-6">
                            {event.description}
                        </p>
                        {/* Weather Info */}
                        {weather && weather.main ? (
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-6">
                                <h4 className="text-lg font-semibold mb-1 text-blue-700">
                                    🌤️ Weather in {event.location}
                                </h4>
                                <p className="text-gray-600">
                                    Temperature: {weather.main.temp} °C
                                </p>
                                <p className="text-gray-600 capitalize">
                                    Condition: {weather.weather[0].description}
                                </p>
                            </div>
                        ) : (
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md mb-6 text-yellow-700">
                                ⚠️ Weather info not available.
                            </div>
                        )}
                        {/* Google Map */}
                        <div className="rounded overflow-hidden shadow-sm mb-6">
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Actions */}
                        <div className="card-actions flex flex-wrap gap-4 mt-8 justify-start">
                            {/* Register */}
                            <a
                                href="/register"
                                title="Register for Event"
                                className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-md transition-transform hover:scale-110"
                            >
                                <ClipboardCheck className="w-5 h-5" />
                            </a>

                            {/* Share */}
                            <button
                                title="Share Event"
                                className="p-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-full shadow-sm transition-transform hover:scale-110"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>

                            {/* Back to Events */}
                            <a
                                href="/events"
                                title="Back to All Events"
                                className="p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full shadow-sm transition-transform hover:scale-110"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
