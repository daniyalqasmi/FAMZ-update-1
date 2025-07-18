import React from "react";
import SeoAndMarketing from "../components/it-services/SeoAndMarketing";
import HeaderOne from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";

const SeoDigitalMarketingPage = () => {
  return (
    <>
      <HeaderOne />
      <div
        style={{
          backgroundColor: "#e3f2fd", 
          minHeight: "80vh", 
          padding: "60px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SeoAndMarketing />
      </div>
      <Footer />
    </>
  );
};

export default SeoDigitalMarketingPage;
