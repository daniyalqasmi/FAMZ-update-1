import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { videoAnimationServices } from "../../data/videoAnimationServices";

const VideoAnimationServices = () => {
  const router = useRouter();
  const [btnHover, setBtnHover] = useState(false);

  // Parallax for character image
  const { scrollY } = useViewportScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/assets/img/services/character.mp4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2,
          filter: "brightness(0.5)",
        }}
      />

      {/* Overlay Gradient */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)",
          zIndex: -1,
        }}
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
          textShadow: "0 0 15px rgba(46, 139, 87, 0.7)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Parallax character image */}
        <motion.img
          // src="/assets/img/services/character.jpg"
          alt=""
          style={{
            position: "absolute",
            top: "4rem",
            right: "5%",
            width: "30vw",
            maxWidth: "300px",
            zIndex: 1,
            y: yPos,
            pointerEvents: "none",
            objectFit: "contain",
          }}
        />

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            color: "#2e8b57",
            marginBottom: "1rem",
            letterSpacing: "1.5px",
          }}
        >
          Video & Character Animation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            color: "#fff",
          }}
        >
          Creating mesmerizing animations that tell your story and engage your audience.
        </motion.p>

        <motion.button
          style={{
            backgroundColor: btnHover ? "#2e8b57" : "transparent",
            color: btnHover ? "#000" : "#2e8b57",
            border: "2px solid #2e8b57",
            padding: "16px 60px",
            borderRadius: "50px",
            fontSize: "1.25rem",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: btnHover ? "0 0 20px #2e8b57" : "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </motion.button>
      </section>

      {/* Services Section */}
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.85)",
          padding: "60px 20px",
          maxWidth: "1100px",
          margin: "0 auto 60px",
          borderRadius: "15px",
          boxShadow: "0 0 30px #2e8b57",
          color: "#2e8b57",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "15px",
            textAlign: "center",
            fontWeight: "700",
            textShadow: "0 0 10px #2e8b57",
          }}
        >
          Our Services
        </h2>
        <hr
          style={{
            width: "90px",
            height: "4px",
            backgroundColor: "#2e8b57",
            margin: "0 auto 40px",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 0 12px #2e8b57",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {videoAnimationServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: "0 0 25px #2e8b57" }}
              style={{
                background: "rgba(46, 139, 87, 0.1)",
                padding: "25px",
                borderRadius: "12px",
                color: "#fff",
                fontWeight: "600",
                cursor: "default",
                userSelect: "none",
                boxShadow: "0 5px 15px rgba(46, 139, 87, 0.3)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{service.title}</h3>
              <p style={{ fontWeight: "400", fontSize: "1rem", lineHeight: "1.5" }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoAnimationServices;
