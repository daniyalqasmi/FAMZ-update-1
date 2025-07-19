import React from 'react';
import HeaderOne from '../../../src/layout/headers/header';
import Breadcrumb from '../../../src/common/breadcrumb/breadcrumb';

import FeatureArea from '../homes/home/feature-area';
import TestimonialFeature from './feature-testimonial';

import FooterContact from '../../../src/layout/footers/footer-contact';
import Footer from '../../../src/layout/footers/footer';

const About = () => {
    return (
        <>
          <HeaderOne />  
          <main>
            <Breadcrumb top_title="Our Company"  page_title="Our Company" />
            <FeatureArea about={true} />
            {/* <SupportArea /> */}
            {/* <VideoArea /> */}
            <TestimonialFeature />
            {/* <TestimonialArea /> */}
            {/* <BrandArea /> */}
            {/* <TeamArea /> */}
            {/* <BlogArea /> */}
            <FooterContact />
          </main>
          <Footer/>
        </>
    );
};

export default About;