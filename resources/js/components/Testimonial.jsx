import React from "react";
import { motion } from "framer-motion";
import  { FiStar } from 'react-icons/fi';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Music Enthusiast",
            content:
                "Found the most amazing concert through this platform! The search was so easy and I got tickets instantly. Best experience ever!",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Event Organizer",
            content:
                "As an organizer, I love how this platform connects me with my audience. The interface is clean and user-friendly.",
            rating: 4,
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            role: "Festival Goer",
            content:
                "Never miss out on events anymore. The recommendations are spot on and the booking process is seamless.",
            rating: 5,
        },
    ];

    return (
        <section className="py-20 px-5 bg-gradient-to-b from-purple-900/80 to-black/90">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-4 text-white text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What People Are Saying
                </motion.h2>

                <motion.p
                    className="text-xl mb-16 text-gray-300 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Don't just take our word for it. Here's what our users have
                    to say about their experiences.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className={`text-lg ${
                                            i < testimonial.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-500"
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">
                                {testimonial.content}
                            </p>
                            <div>
                                <h4 className="text-white font-medium">
                                    {testimonial.name}
                                </h4>
                                <p className="text-purple-300 text-sm">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Testimonial