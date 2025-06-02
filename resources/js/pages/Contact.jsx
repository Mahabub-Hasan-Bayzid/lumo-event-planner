import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
FiMail,
FiPhone,
FiMapPin,
FiSend,
FiUser,
FiMessageSquare,
} from "react-icons/fi";

const Contact = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);

useEffect(() => {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
}, []);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({
    ...prev,
    [name]: value,
}));
};

const handleSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);

// Simulate API call
try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
} catch (error) {
    setSubmitStatus("error");
} finally {
    setIsSubmitting(false);
}
};

return (
<section
    className="min-h-screen py-20 px-5 bg-gradient-to-b from-black/90 to-purple-900/80"
    id="top"
>
    <div className="max-w-7xl mx-auto">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team for any questions or feedback
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information Column */}
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">
                        About EventFinder
                    </h3>
                    <p className="text-gray-300 mb-4">
                        EventFinder is your premier platform for
                        discovering and attending the most exciting
                        events in your area. From concerts and festivals
                        to workshops and networking events, we connect
                        you with unforgettable experiences.
                    </p>
                    <p className="text-gray-300">
                        Our mission is to make event discovery seamless
                        and enjoyable, while providing event organizers
                        with powerful tools to reach their audience.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-600/20 rounded-full mt-1">
                            <FiMail className="text-xl text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                                Email Us
                            </h4>
                            <p className="text-gray-300">
                                support@eventfinder.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-600/20 rounded-full mt-1">
                            <FiPhone className="text-xl text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                                Call Us
                            </h4>
                            <p className="text-gray-300">
                                +1 (555) 123-4567
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-600/20 rounded-full mt-1">
                            <FiMapPin className="text-xl text-purple-300" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                                Visit Us
                            </h4>
                            <p className="text-gray-300">
                                123 Event Street, Suite 456
                            </p>
                            <p className="text-gray-300">
                                San Francisco, CA 94107
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">
                        Send Us a Message
                    </h3>

                    {submitStatus === "success" && (
                        <motion.div
                            className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Thank you! Your message has been sent
                            successfully.
                        </motion.div>
                    )}

                    {submitStatus === "error" && (
                        <motion.div
                            className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Something went wrong. Please try again
                            later.
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2">
                                Your Name
                            </label>
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">
                                Your Message
                            </label>
                            <div className="relative">
                                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="How can we help you?"
                                />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    <FiSend /> Send Message
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    </div>
</section>
);
};

export default Contact;
