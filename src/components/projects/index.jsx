import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import Projects_area from "./projects-details-area";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer";

const Software_web_development = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <Projects_area/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Software_web_development;
