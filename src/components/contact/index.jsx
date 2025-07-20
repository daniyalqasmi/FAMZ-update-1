import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import HeaderOne from '../../layout/headers/header';
import React from 'react';
import ContactArea from './contact-area';
import GoogleMap from './google-map';
import FooterContact from '../../layout/footers/footer-contact';
// import FooterThree from '@/layout/footers/footer-3';
import Footer from '../../layout/footers/footer';

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <Breadcrumb top_title="Contact Us"  page_title="Contact Us" />
                <ContactArea />
                <GoogleMap />
                <FooterContact contact_style={true} />
            </main>
            <Footer />
        </>
    );
};

export default Contact;