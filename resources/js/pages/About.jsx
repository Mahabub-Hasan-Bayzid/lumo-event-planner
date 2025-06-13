import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page bg-gradient-to-b from-emerald-50 to-gray-100 pt-10">
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-4xl font-bold mb-4 text-center">
                    About Us
                </h2>
                <div className="w-24 h-1 mx-auto mb-12 bg-[#00BC7D]"></div>

                <div className="">
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
                        experiences. We specialize in crafting modern,
                        innovative, and seamless events tailored to your unique
                        needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                            data-aos="fade-right"
                        >
                            <h2 className="text-3xl font-bold text-black mb-4">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                At <strong>Lumo Event Planner</strong>, our
                                mission is to{" "}
                                <strong>
                                    transform your vision into reality
                                </strong>
                                . We are dedicated to delivering{" "}
                                <em>exceptional events</em> that leave a lasting
                                impression. By combining{" "}
                                <strong>
                                    creativity, professionalism, and meticulous
                                    attention to detail
                                </strong>
                                , we ensure every celebration is unique,
                                memorable, and flawlessly executed. Your special
                                moments deserve nothing less than perfection —
                                and that’s exactly what we strive to achieve.
                            </p>
                        </div>
                        <div
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-emerald-500"
                            data-aos="fade-left"
                        >
                            <h2 className="text-3xl font-bold text-black mb-4">
                                Why Choose Us
                            </h2>
                            <p>
                                With years of experience and a passion for
                                excellence, <strong>Lumo Event Planner</strong>{" "}
                                brings a fresh, modern approach to event
                                planning. We understand that every event is
                                unique, and our dedicated team works closely
                                with you to create a seamless and unforgettable
                                experience.
                            </p>

                            <p>
                                What sets us apart is our commitment to
                                perfection in every detail. From the initial
                                consultation to the final moment of your event,
                                we ensure everything runs smoothly — so you can
                                relax and truly enjoy your special day.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <h2
                            className="text-3xl font-bold text-black mb-4"
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
                            Whether it's a corporate gathering, wedding, or
                            private party,{" "}
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
                </div>
            </div>
            <div className="py-10 bg-white">
                <div className="my-8 max-w-7xl mx-auto ">
                    <h2
                        className="text-4xl font-extrabold text-center text-black mb-8"
                        data-aos="fade-up"
                    >
                        Meet Our Team
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-12 bg-[#00BC7D]"></div>
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
