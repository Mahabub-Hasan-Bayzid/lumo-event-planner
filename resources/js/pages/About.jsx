import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page bg-gradient-to-b from-emerald-50 to-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1
                    className="text-5xl font-extrabold text-center text-emerald-700 mb-6"
                    data-aos="fade-up"
                >
                    About Us
                </h1>
                <p
                    className="text-xl text-gray-700 text-center mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Welcome to{" "}
                    <span className="text-emerald-600 font-bold">
                        Lumo Event Planner
                    </span>
                    , your trusted partner in creating unforgettable
                    experiences. We specialize in crafting modern, innovative,
                    and seamless events tailored to your unique needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                        data-aos="fade-right"
                    >
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-700">
                            At{" "}
                            <span className="text-emerald-600 font-bold">
                                Lumo Event Planner
                            </span>
                            , our mission is to transform your vision into
                            reality. We aim to deliver exceptional events that
                            leave lasting impressions, combining creativity,
                            professionalism, and attention to detail.
                        </p>
                    </div>
                    <div
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                        data-aos="fade-left"
                    >
                        <h2 className="text-3xl font-bold text-emerald-700 mb-4">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-700">
                            With years of experience and a passion for
                            excellence, we bring a modern approach to event
                            planning. Our team is dedicated to ensuring every
                            detail is perfect, so you can focus on enjoying your
                            special moments.
                        </p>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h2
                        className="text-3xl font-bold text-emerald-700 mb-4"
                        data-aos="zoom-in"
                    >
                        Let’s Create Something Amazing Together
                    </h2>
                    <p
                        className="text-gray-700 mb-6"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Contact us today to start planning your next event.
                        Whether it's a corporate gathering, wedding, or private
                        party,{" "}
                        <span className="text-emerald-600 font-bold">
                            Lumo Event Planner
                        </span>{" "}
                        is here to make it extraordinary.
                    </p>
                    <button
                        className="bg-emerald-600 text-white py-3 px-8 rounded-lg hover:bg-emerald-700 transition shadow-md"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        Get in Touch
                    </button>
                </div>
                <div className="mt-16">
                    <h2
                        className="text-4xl font-extrabold text-center text-emerald-700 mb-8"
                        data-aos="fade-up"
                    >
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                            data-aos="flip-left"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/195274970?s=400&u=b5353f0d6ed29e2f0c8ac18b53117ee04ea0d4eb&v=4"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-500"
                            />
                            <h3 className="text-xl font-bold text-emerald-700">
                                Mahabub Hasan Bayzid
                            </h3>
                            <p className="text-gray-700">Event Manager</p>
                        </div>
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                            data-aos="flip-left"
                            data-aos-delay="200"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/138318892?v=4"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-500"
                            />
                            <h3 className="text-xl font-bold text-emerald-700">
                                Md. Saifuddullah
                            </h3>
                            <p className="text-gray-700">Creative Director</p>
                        </div>
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                            data-aos="flip-left"
                            data-aos-delay="400"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/195280634?v=4"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-500"
                            />
                            <h3 className="text-xl font-bold text-emerald-700">
                                Anthony Daniel
                            </h3>
                            <p className="text-gray-700">
                                Logistics Specialist
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow mt-8 mx-auto border-t-4 border-emerald-500"
                        style={{ maxWidth: "300px" }}
                        data-aos="flip-up"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/129788597?v=4"
                            alt="Team Member"
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-500"
                        />
                        <h3 className="text-xl font-bold text-emerald-700">
                            Md. Saeid
                        </h3>
                        <p className="text-gray-700">Logistics Specialist</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
