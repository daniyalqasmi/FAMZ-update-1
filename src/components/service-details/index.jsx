import Breadcrumb from "../../../src/common/breadcrumb/breadcrumb";
import HeaderOne from "../../../src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";

import Footer from "../../../src/layout/footers/footer";
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
