import React, { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.fullName}! We received your message.`);
        setFormData({ fullName: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="py-12 bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-4xl font-bold text-center mb-3">
                    Contact Us
                </h2>
                <div className="w-24 h-1 mx-auto mb-10 bg-[#00BC7D]"></div>

                {/* Use flex to stretch children */}
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Map container with same min-height */}
                    <div className="flex-1 rounded-lg overflow-hidden shadow-lg min-h-[480px]">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.48669590639!2d24.925958293579114!3d60.201530199999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920991ece823df%3A0xd4b4f30731ef9db7!2sBusiness%20College%20Helsinki!5e0!3m2!1sen!2sfi!4v1748991109787!5m2!1sen!2sfi"
                            width="600"
                            height="450"
                            style="border:0;"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex-1 card bg-base-100 shadow-xl p-6 min-h-[480px] flex flex-col"
                    >
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="input input-bordered w-full text-base"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="input input-bordered w-full text-base"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    Phone
                                </span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 234 567 890"
                                className="input input-bordered w-full text-base"
                            />
                        </div>

                        <div className="form-control mb-6 flex-grow">
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    Message
                                </span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here"
                                className="textarea textarea-bordered w-full text-base"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full text-white bg-[#00BC7D] border-[#00BC7D]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
