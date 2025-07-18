const seoMarketingData = {
  title: "Expert SEO & Digital Marketing",
  description:
    "We help businesses of all sizes drive more traffic, generate leads, and improve online visibility through proven SEO strategies and targeted marketing campaigns.",
  services: [
    "On-page SEO Optimization",
    "Keyword Research & Strategy",
    "Technical SEO Audit",
    "Backlink Building",
    "Local SEO Services",
    "Content Marketing",
    "PPC Campaign Management",
    "Social Media Integration",
  ],
};

export default seoMarketingData;


// import React from "react";
// import seoMarketingData from "../../data/seo-marketing";

// const SeoAndMarketing = () => {
//   return (
//     <section
//       style={{
//         background: "#ffffff", // white card background
//         padding: "70px 20px",
//         textAlign: "center",
//         borderRadius: "20px",
//         maxWidth: "950px",
//         margin: "0 auto",
//         boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <h2
//         style={{
//           fontSize: "clamp(2.4rem, 4vw, 3rem)",
//           marginBottom: "12px",
//           color: "#0d47a1",
//           fontWeight: "800",
//         }}
//       >
//         {seoMarketingData.title}
//       </h2>

//       <p
//         style={{
//           fontSize: "1.2rem",
//           color: "#e53935",
//           marginBottom: "28px",
//           fontWeight: "600",
//           letterSpacing: "0.3px",
//         }}
//       >
//         Your Growth, Our Strategy 🔥
//       </p>

//       <p
//         style={{
//           fontSize: "1.1rem",
//           lineHeight: "1.8",
//           color: "#333",
//           maxWidth: "750px",
//           margin: "0 auto 40px",
//         }}
//       >
//         {seoMarketingData.description}
//       </p>

//       <h3
//         style={{
//           fontSize: "1.6rem",
//           marginBottom: "24px",
//           color: "#fbc02d",
//           fontWeight: "700",
//         }}
//       >
//         🚀 Top-Notch Services We Provide
//       </h3>

//       <ul
//         style={{
//           listStyle: "none",
//           padding: 0,
//           margin: "0 0 50px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//           alignItems: "center",
//         }}
//       >
//         {seoMarketingData.services.map((service, idx) => (
//           <li
//             key={idx}
//             style={{
//               background: "#ffffff",
//               padding: "16px 28px",
//               borderRadius: "12px",
//               borderLeft: "6px solid #2196f3",
//               borderRight: "6px solid #fbc02d",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
//               maxWidth: "520px",
//               width: "100%",
//               color: "#444",
//               fontSize: "1.05rem",
//               fontWeight: "500",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "scale(1.02)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 18px rgba(0,0,0,0.1)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow =
//                 "0 4px 12px rgba(0, 0, 0, 0.05)";
//             }}
//           >
//             {service}
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//         window.location.href = "/contact";
//         }}
//         style={{
//           padding: "14px 36px",
//           fontSize: "1rem",
//           backgroundColor: "#e53935",
//           color: "#fff",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//           transition: "background 0.3s ease",
//           fontWeight: "600",
//         }}
//         onMouseOver={(e) => {
//           e.currentTarget.style.backgroundColor = "#c62828";
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.backgroundColor = "#e53935";
//         }}
//       >
//         🔍 Get Your Free SEO Audit
//       </button>
//     </section>
//   );
// };

// export default SeoAndMarketing;








// import React from "react";
// import seoMarketingData from "../../data/seo-marketing";

// const SeoAndMarketing = () => {
//   return (
//     <section
//       style={{
//         background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
//         padding: "80px 20px",
//         textAlign: "center",
//         borderRadius: "24px",
//         maxWidth: "1000px",
//         margin: "0 auto",
//         boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         overflow: "hidden",
//         transition: "all 0.3s ease-in-out",
//       }}
//     >
//       <h2
//         style={{
//           fontSize: "clamp(2.5rem, 4vw, 3.2rem)",
//           marginBottom: "16px",
//           color: "#0d47a1",
//           fontWeight: "900",
//           letterSpacing: "-0.5px",
//         }}
//       >
//         {seoMarketingData.title}
//       </h2>

//       <p
//         style={{
//           fontSize: "1.25rem",
//           color: "#e53935",
//           marginBottom: "30px",
//           fontWeight: "600",
//           letterSpacing: "0.5px",
//           textTransform: "uppercase",
//         }}
//       >
//         🚀 Your Growth, Our Strategy
//       </p>

//       <p
//         style={{
//           fontSize: "1.15rem",
//           lineHeight: "1.85",
//           color: "#333",
//           maxWidth: "780px",
//           margin: "0 auto 48px",
//           padding: "0 10px",
//         }}
//       >
//         {seoMarketingData.description}
//       </p>

//       <h3
//         style={{
//           fontSize: "1.75rem",
//           marginBottom: "28px",
//           color: "#fbc02d",
//           fontWeight: "700",
//           letterSpacing: "0.5px",
//         }}
//       >
//         ✨ Premium Services We Offer
//       </h3>

//       <ul
//         style={{
//           listStyle: "none",
//           padding: 0,
//           margin: "0 0 60px",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//           gap: "20px",
//           justifyItems: "center",
//         }}
//       >
//         {seoMarketingData.services.map((service, idx) => (
//           <li
//             key={idx}
//             style={{
//               background: "#ffffff",
//               padding: "20px 30px",
//               borderRadius: "16px",
//               borderLeft: "6px solid #2196f3",
//               borderRight: "6px solid #fbc02d",
//               boxShadow: "0 6px 18px rgba(0, 0, 0, 0.07)",
//               color: "#444",
//               fontSize: "1.1rem",
//               fontWeight: "500",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "scale(1.03)";
//               e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.07)";
//             }}
//           >
//             {service}
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//           window.location.href = "/contact";
//         }}
//         style={{
//           padding: "16px 42px",
//           fontSize: "1.1rem",
//           backgroundColor: "#e53935",
//           color: "#fff",
//           border: "none",
//           borderRadius: "10px",
//           cursor: "pointer",
//           transition: "all 0.3s ease",
//           fontWeight: "600",
//           boxShadow: "0 4px 14px rgba(229, 57, 53, 0.3)",
//         }}
//         onMouseOver={(e) => {
//           e.currentTarget.style.backgroundColor = "#c62828";
//           e.currentTarget.style.boxShadow = "0 6px 20px rgba(198, 40, 40, 0.4)";
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.backgroundColor = "#e53935";
//           e.currentTarget.style.boxShadow = "0 4px 14px rgba(229, 57, 53, 0.3)";
//         }}
//       >
//         🔍 Get Your Free SEO Audit
//       </button>
//     </section>
//   );
// };

// export default SeoAndMarketing;
