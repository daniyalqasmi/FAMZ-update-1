import React from "react";
import { domainHostingServices } from "../../data/domain&hosting";
import { useRouter } from "next/router";

const DomainHosting = () => {
  const router = useRouter();
  const [hover, setHover] = React.useState(false);

  const styles = {
    wrapper: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#fff",
      minHeight: "100vh",
      backgroundImage: "url('/assets/img/services/domain.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", 
      position: "relative",
      paddingBottom: "60px",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 1,
    },
    heroSection: {
      position: "relative",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      zIndex: 2,
      padding: "0 20px",
    },
    heroContent: {
      color: "#fff",
      maxWidth: "800px",
    },
    heroHeading: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "0 0 10px rgba(0,0,0,0.7)",
    },
    heroSubheading: {
      fontSize: "1.6rem",
      textShadow: "0 0 8px rgba(0,0,0,0.6)",
    },
    servicesSection: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0.85)",
      color: "#222",
      maxWidth: "1100px",
      margin: "40px auto",
      borderRadius: "15px",
      padding: "40px 30px",
      zIndex: 2,
      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
    },
    servicesHeading: {
      fontSize: "2.8rem",
      marginBottom: "10px",
      color: "#333",
      textAlign: "center",
      fontWeight: "700",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    underline: {
      width: "80px",
      height: "4px",
      backgroundColor: "#0070f3",
      margin: "0 auto 40px",
      border: "none",
      borderRadius: "2px",
    },
    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
    },
    serviceCard: {
      background: "#d9e8ff", 
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "0 6px 18px rgba(0, 112, 243, 0.3)",
      color: "#004085",
      fontWeight: "600",
      transition: "transform 0.3s ease",
      cursor: "default",
    },
    ctaSection: {
      textAlign: "center",
      marginTop: "50px",
      zIndex: 2,
      position: "relative",
    },
    ctaButton: {
      backgroundColor: "#0070f3",
      color: "#fff",
      padding: "18px 50px",
      border: "none",
      borderRadius: "50px",
      fontSize: "1.2rem",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(0, 112, 243, 0.6)",
      transition: "background-color 0.3s ease",
    },
    ctaButtonHover: {
      backgroundColor: "#005bb5",
      boxShadow: "0 6px 25px rgba(0, 91, 181, 0.9)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay} /> 

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>Domain & Hosting Services</h1>
          <p style={styles.heroSubheading}>
            Reliable, fast, and secure solutions for your online presence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.servicesHeading}>Our Services</h2>
        <hr style={styles.underline} />
        <div style={styles.servicesGrid}>
          {domainHostingServices.map((service, index) => (
            <div
              key={index}
              style={styles.serviceCard}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <button
          style={hover ? { ...styles.ctaButton, ...styles.ctaButtonHover } : styles.ctaButton}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => router.push("/contact")}
        >
          Get Started with Your Domain
        </button>
      </section>
    </div>
  );
};

export default DomainHosting;
