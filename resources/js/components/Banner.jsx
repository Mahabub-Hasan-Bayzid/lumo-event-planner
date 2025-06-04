import React from "react";

const Banner = () => {
    return (
        <div
            className="hero h-[700px] md:h-[600px] sm:h-[400px] min-h-[300px]"
            style={{
                backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="hero-overlay bg-[#00BC7D]/70"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">
                        <a href={"/events"}>All Events</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
