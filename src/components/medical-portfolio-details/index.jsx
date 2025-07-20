import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer";
import It_ServiceArea from "./Medical-portfolio-details-area";
import Medical_ServiceArea from "./Medical-portfolio-details-area";

const MedicalPortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Medical Portfolio" page_title=" Portfolio Details" />
        <Medical_ServiceArea/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default MedicalPortfolioDetails;
