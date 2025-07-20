import React from 'react';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';

import FeatureArea from '../homes/home/feature-area';
// import SupportArea from './support-area';
// import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
// import TestimonialArea from '@src/common/testimonial-area';
// import BrandArea from '@/src/common/brand-area';
// import TeamArea from '@/src/common/team-area';
// import BlogArea from '@/src/common/blog-area';
import FooterContact from '../../layout/footers/footer-contact';
// import FooterThree from '@/src/layout/footers/footer';
import Footer from '../../layout/footers/footer';

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