import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer-3";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Our Projects"  page_title="Portfolio" />
        <PortfolioArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Portfolio;

