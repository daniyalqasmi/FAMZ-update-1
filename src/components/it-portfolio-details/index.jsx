import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer";
import It_ServiceArea from "./it-portfolio-details-area";

const ItPortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <It_ServiceArea/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default ItPortfolioDetails;
