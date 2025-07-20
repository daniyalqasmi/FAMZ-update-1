import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
// import FooterContact from "@/src/layout/footers/footer-contact";
// import FooterThree from "@/src/layout/footers/footer";
// import AboutArea from "../homes/home-3/about-area";
// import CounterArea from "../homes/home-2/counter-area";
import Footer from "../../layout/footers/footer";
const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="About Company" page_title="About Compay" />
        {/* <Tabs2/> */}
        <ServiceDetailsArea/>
      </main>
      <Footer/>
    </>
  );
};

export default ServiceDetails;
