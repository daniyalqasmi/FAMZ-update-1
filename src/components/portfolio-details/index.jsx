import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer-3";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT " page_title=" IT Portfolio Details" />
        <PortfolioDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
