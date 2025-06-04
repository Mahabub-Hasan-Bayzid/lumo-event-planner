import { useState } from "react";

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1485217988980-11786ced9454",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095",
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    ];

    const [currentIndex, setCurrentIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const showNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Our Gallery
                </h2>
                <div className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl overflow-hidden shadow-md cursor-pointer"
                            onClick={() => openLightbox(idx)}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-70 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={showPrev}
                            className="absolute cursor-pointer left-10 text-white text-3xl font-bold"
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        <img
                            src={images[currentIndex]}
                            alt={`Lightbox ${currentIndex}`}
                            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={showNext}
                            className="absolute cursor-pointer right-10 text-white text-3xl font-bold"
                            aria-label="Next"
                        >
                            ›
                        </button>

                        <button
                            onClick={closeLightbox}
                            className="absolute cursor-pointer top-10 right-10 text-white text-3xl font-bold"
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
