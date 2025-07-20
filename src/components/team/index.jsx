import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import TeamMembers from "./team-members";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title="Team" />
        <TeamMembers />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Team;
