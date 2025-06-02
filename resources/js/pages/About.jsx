import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-purple-900/80 to-black/90">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating unforgettable experiences through innovation and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <FiUsers className="text-2xl text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">About Us</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                We are passionate about creating amazing digital experiences that empower
                people and businesses. Our team works tirelessly to innovate and bring fresh
                ideas to life.
              </p>
              <p className="text-gray-300">
                Founded in 2020, we have grown steadily by focusing on quality, creativity,
                and customer satisfaction. We believe in building strong relationships and
                delivering value.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <FiTarget className="text-2xl text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Our mission is to leverage technology to solve real-world problems while
                fostering creativity and collaboration. We aim to be a trusted partner for
                our clients on their journey to success.
              </p>
              <p className="text-gray-300">
                Whether it's through software development, design, or consulting, we strive
                to exceed expectations and deliver results that matter.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <FiAward className="text-2xl text-purple-300" />
              </div>
              <h4 className="text-xl font-semibold text-white">Our Values</h4>
            </div>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Innovation and creativity
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Customer-centric approach
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Transparency and honesty
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Continuous improvement
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-600/20 rounded-full">
                <FiHeart className="text-2xl text-purple-300" />
              </div>
              <h4 className="text-xl font-semibold text-white">Why Choose Us</h4>
            </div>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Experienced and passionate team
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Cutting-edge technology
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Personalized solutions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-300">•</span> Proven track record
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}