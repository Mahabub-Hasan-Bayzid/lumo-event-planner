import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            className="hero h-[700px] md:h-[600px] sm:h-[400px] min-h-[300px] relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Modern animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00BC7D]/80 via-[#00895B]/70 to-[#00BC7D]/60 animate-pulse-slow z-0"></div>

            <div
                className="hero-content z-10 text-center text-white"
                data-aos="fade-up"
            >
                <div className="max-w-2xl">
                    <h1 className="mb-6 text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Plan. Celebrate. Repeat.
                    </h1>
                    <p className="mb-6 text-lg md:text-xl text-emerald-100 drop-shadow-sm">
                        Discover, organize, and experience unforgettable events
                        with ease. Your perfect day starts here.
                    </p>
                    <a
                        href="/events"
                        className="btn bg-white text-emerald-600 hover:bg-emerald-100 border-none shadow-md px-8 py-3 text-lg font-semibold transition duration-300"
                    >
                        Explore Events
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
