import React, { useState } from "react";
import { useRouter } from "next/router";
import { seoMarketingServices } from "../../data/seo-marketing";

const SeoMarketing = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: "#222",
        // Full page fixed background image
        backgroundImage: "url('/assets/img/services/seo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",
          textShadow: "0 0 12px rgba(0,0,0,0.8)",
          userSelect: "none",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            marginBottom: "1rem",
            maxWidth: "900px",
            lineHeight: "1.1",
          }}
        >
          SEO & Digital Marketing Services
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "650px",
            margin: "0 auto",
            fontWeight: "500",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Elevate your online presence, drive organic traffic, and boost conversions with our tailored SEO and digital marketing solutions.
        </p>
      </section>

      {/* Services Section */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "4rem auto 6rem",
          padding: "40px 20px",
          // NO background here — transparent to show fixed bg image
          // backgroundColor: "transparent",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            marginBottom: "30px",
            textAlign: "center",
            fontWeight: "700",
            color: "#0070f3",
            userSelect: "none",
            textShadow: "0 0 10px rgba(0, 112, 243, 0.7)",
          }}
        >
          What We Offer
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {seoMarketingServices.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(224, 240, 255, 0.9)", // light blue with opacity
                borderRadius: "15px",
                padding: "30px 25px",
                boxShadow: "0 4px 12px rgba(0, 112, 243, 0.2)",
                cursor: "default",
                userSelect: "none",
                transition: "transform 0.2s ease",
                minHeight: "220px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3
                style={{
                  color: "#004a99",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  userSelect: "text",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#222",
                  userSelect: "text",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <button
            onClick={() => router.push("/contact")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#0056d2" : "#0070f3",
              color: "#fff",
              padding: "18px 55px",
              borderRadius: "50px",
              fontSize: "1.3rem",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              boxShadow: hover ? "0 0 15px #0056d2" : "0 0 8px #0070f3",
              transition: "all 0.3s ease",
              userSelect: "none",
            }}
            aria-label="Contact Us for SEO and Digital Marketing Services"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default SeoMarketing;
