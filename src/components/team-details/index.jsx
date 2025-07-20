import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import HeaderOne from '../../layout/headers/header';
import React from 'react';
import TeamDetailsArea from './team-details-area';
import FooterContact from '../../layout/footers/footer-contact';
import FooterThree from '../../layout/footers/footer-3';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="IT Advisor"  page_title="Team Details" />
                <TeamDetailsArea />
                <FooterContact bg_style={true} />
            </main>
            <FooterThree />
        </>
    );
};

export default TeamDetails;