import React from "react"; 
import HeaderOne from "../../layout/headers/header";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import IndustryArea from "../../common/industry-area";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer-3";

const Sevice = () => {
  return (
    <>
      <HeaderOne />
      <main>
            <Breadcrumb top_title="Our Services" page_title="Service" />
            <ServiceArea />
            {/* <VideoArea service={true}/> */}
            <IndustryArea service={true} />
            {/* <BrandArea service={true} /> */}
            {/* <BlogArea service={true} /> */}
            <FooterContact />
      </main>
      <FooterThree />
    </>
  );
};

export default Sevice;
