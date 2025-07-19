import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { graphicServices } from "../../data/graphicServices";

const AnimatedLetter = ({ letter, delay }) => {
  return (
    <motion.span
      initial={{ y: -20, opacity: 0, rotate: -15 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ display: "inline-block", marginRight: "2px", fontWeight: "900", color: "#bb99ff" }}
    >
      {letter}
    </motion.span>
  );
};

const GraphicServices = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const headingText = "Graphic Design & UI/UX Services";

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "#eee",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.45) contrast(1.3)",
        }}
        src="/assets/videos/galaxy-stars.mp4"
        type="video/mp4"
      />

      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          paddingTop: "5rem",
          textShadow: "0 0 15px #8a00ff",
        }}
      >
        <motion.h1
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            marginBottom: "1rem",
            userSelect: "none",
          }}
        >
          {headingText.split("").map((letter, i) =>
            letter === " " ? (
              <span key={i} style={{ marginRight: "8px" }} />
            ) : (
              <AnimatedLetter key={i} letter={letter} delay={i * 0.2} />
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ fontSize: "1.5rem", maxWidth: "650px", margin: "0 auto 3rem", color: "#ccc" }}
        >
          Transforming ideas into stunning visuals and seamless digital experiences.
        </motion.p>
      </section>

      {/* Services Section */}
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.85)",
          padding: "60px 30px",
          maxWidth: "1100px",
          margin: "0 auto 60px",
          borderRadius: "20px",
          boxShadow: "0 0 40px #7f5aff",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "20px",
            color: "#e0d7ff",
            textAlign: "center",
            textShadow: "0 0 15px #bb99ff",
            userSelect: "none",
          }}
        >
          What We Offer
        </h2>
        <hr
          style={{
            width: "90px",
            height: "4px",
            backgroundColor: "#bb99ff",
            margin: "0 auto 50px",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 0 15px #bb99ff",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {graphicServices.map((service, index) => (
            <motion.div
              key={index}
              style={{
                background: "rgba(30, 20, 70, 0.95)",
                borderRadius: "20px",
                padding: "50px 40px",
                boxShadow: "0 8px 30px rgba(139, 0, 255, 0.8)",
                border: "1.5px solid rgba(139, 0, 255, 0.5)",
                color: "#d9cfff",
                cursor: "default",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                transition: "box-shadow 0.15s ease, transform 0.15s ease",
                perspective: 800, // 3D perspective
              }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                rotateX: 10,
                rotateY: 5,
                boxShadow: "0 0 25px 5px #d09eff",
                cursor: "pointer",
                borderColor: "#d09eff",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <h3
                style={{
                  marginBottom: "14px",
                  borderBottom: "2px solid #bb99ff",
                  paddingBottom: "6px",
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.8" }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <section style={{ textAlign: "center", marginBottom: "4rem" }}>
        <button
          style={{
            backgroundColor: hover ? "#8a00ff" : "#bb99ff",
            color: hover ? "#fff" : "#1a004d",
            padding: "20px 60px",
            borderRadius: "50px",
            fontSize: "1.25rem",
            fontWeight: "700",
            cursor: "pointer",
            border: "none",
            boxShadow: hover ? "0 0 30px #d09eff" : "0 0 20px #bb99ff",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => router.push("/contact")}
          aria-label="Contact Us for Graphic Design and UI/UX Services"
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default GraphicServices;
