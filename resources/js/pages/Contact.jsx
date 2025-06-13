import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="contact-page bg-gradient-to-b from-emerald-50 to-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 pt-10 text-center">
                    Contact Us
                </h2>
                <div className="w-24 h-1 mx-auto mb-12 bg-[#00BC7D]"></div>
                <p
                    className="text-xl text-gray-700 text-center mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Have questions or want to plan your next event? Reach out to
                    us, and let's make it extraordinary together!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                        data-aos="fade-right"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Get in Touch
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    placeholder="Your Message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-emerald-600 text-white py-3 px-8 rounded-lg hover:bg-emerald-700 transition shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                        data-aos="fade-left"
                    >
                        <h2 className="text-3xl font-bold text-black mb-6">
                            Visit Us
                        </h2>
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.48669590639!2d24.925958293579114!3d60.201530199999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920991ece823df%3A0xd4b4f30731ef9db7!2sBusiness%20College%20Helsinki!5e0!3m2!1sen!2sfi!4v1748991109787!5m2!1sen!2sfi"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
