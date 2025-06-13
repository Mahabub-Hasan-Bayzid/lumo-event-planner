import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1633273554953-6213f88fa78c",
    "https://images.unsplash.com/photo-1747115275646-49725fb5a003",
];
const Banner = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        duration: 2000,
        drag: true,
        slides: {
            origin: "center",
            perView: 1,
        },
        created(s) {
            setInterval(() => s.next(), 5000); // Auto slide every 5s
        },
    });
    return (
        <div
            ref={sliderRef}
            className="keen-slider h-[700px] md:h-[600px] sm:h-[400px] min-h-[300px]"
        >
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className="keen-slider__slide relative flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                >
                    <div className="absolute inset-0 bg-[#00BC7D]/60 z-10"></div>
                    <div className="relative z-20 text-white text-center max-w-md px-4">
                        <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">
                            Discover Moments That Matter
                        </h1>
                        <p className="mb-5 text-lg drop-shadow-sm">
                            Join us in celebrating stories, people, and
                            unforgettable experiences. Your next adventure
                            begins here.
                        </p>
                        <a href="/events">
                            <button className="btn bg-white text-[#00BC7D] border-none font-semibold">
                                All Events
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
