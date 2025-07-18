import React from "react";
import domainHostingData from "../../data/domainhosting-services";
import { motion } from "framer-motion";

const floatAnim = {
  animate: { y: [0, -15, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
};
const netAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 0.15, transition: { duration: 2 } },
};
const cardFade = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DomainHosting = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 text-gray-900 font-poppins overflow-hidden">
    {/* Floating SVGs */}
    <motion.svg variants={floatAnim} animate="animate" className="absolute top-10 left-6 w-40 opacity-20 z-0" viewBox="0 0 100 100">
      <rect x="30" y="15" width="40" height="60" stroke="#0288d1" strokeWidth="3" fill="none" rx="5" />
      <circle cx="50" cy="45" r="5" fill="#0288d1" />
    </motion.svg>

    <motion.svg variants={floatAnim} animate="animate" className="absolute bottom-10 right-10 w-40 opacity-15 z-0" viewBox="0 0 100 100">
      <path d="M20 60 Q30 30 60 40 Q80 20 90 50 Q85 80 60 70 Q40 90 20 70 Z"
        stroke="#0288d1" strokeWidth="2" fill="none" />
      <circle cx="50" cy="55" r="6" fill="#0288d1" />
    </motion.svg>

    <motion.svg variants={netAnim} animate="animate" className="absolute top-32 right-20 w-36 z-0" viewBox="0 0 100 100">
      <circle cx="20" cy="20" r="4" fill="#0288d1" />
      <circle cx="80" cy="30" r="4" fill="#0288d1" />
      <circle cx="50" cy="80" r="4" fill="#0288d1" />
      <line x1="20" y1="20" x2="80" y2="30" stroke="#0288d1" strokeWidth="1" />
      <line x1="80" y1="30" x2="50" y2="80" stroke="#0288d1" strokeWidth="1" />
      <line x1="50" y1="80" x2="20" y2="20" stroke="#0288d1" strokeWidth="1" />
    </motion.svg>

    {/* Main Card */}
    <motion.div variants={cardFade} initial="initial" animate="animate"
      className="relative max-w-6xl mx-auto bg-white rounded-3xl p-10 shadow-2xl z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">{domainHostingData.hero.heading}</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">{domainHostingData.hero.subheading}</p>

      <section className="mb-10">
        <h2 className="text-2xl text-blue-600 font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          {domainHostingData.services.map((s, i) => (
            <li key={i}><strong>{s.name}:</strong> {s.description}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-yellow-600 font-bold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          {domainHostingData.features.map((f, i) => (
            <li key={i}><strong>{f.title}:</strong> {f.description}</li>
          ))}
        </ul>
      </section>

      {/* 💳 Pricing Plans */}
      <section className="mb-10">
        <h2 className="text-2xl text-blue-600 font-bold mb-6">Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domainHostingData.plans.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border-2 border-yellow-500 rounded-xl p-6 shadow-lg hover:shadow-2xl text-center cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{p.title}</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-4">{p.price}</p>
              <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
                {p.features.map((fs, idx) => <li key={idx}>{fs}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl text-blue-600 font-bold mb-2">{domainHostingData.cta.title}</h2>
        <p className="text-lg text-gray-700 mb-4">{domainHostingData.cta.subtitle}</p>
        <a href={domainHostingData.cta.link}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition">
          {domainHostingData.cta.buttonText}
        </a>
      </section>
    </motion.div>
  </div>
);

export default DomainHosting;
