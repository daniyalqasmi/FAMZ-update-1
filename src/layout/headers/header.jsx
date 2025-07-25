import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './nav-menu';
// import LangLogo from "@assets/img/logo/logo-lang.png";
import useSticky from '../../hooks/use-sticky';
import HamburgerBtn from '../../svg/hamburger-btn';
import React, { useEffect, useRef, useState } from 'react';
import HomeIcon from '../../svg/home-icon';
import SearchPopup from '../../modals/search-popup';
import Sidebar from '../../modals/sidebar';
import Logo from "../../../public/assets/img/logo/logo.png";

const HeaderOne = () => {
   const { sticky } = useSticky()
   const langToggleRef = useRef(null);
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)

   const [isLangListOpen, setIsLangListOpen] = useState(false);
   useEffect(() => {
      if (langToggleRef.current) {
         const handleClickOutside = (e) => {
            if (langToggleRef.current.contains(e.target)) {
               setIsLangListOpen(!isLangListOpen);
            } else {
               setIsLangListOpen(false);
            }
         };
         window.addEventListener('click', handleClickOutside);
         return () => {
            window.removeEventListener('click', handleClickOutside);
         };
      }
   }, [isLangListOpen, langToggleRef]);


   return (
      <>
         <header className="tp-header-area tp-header-height p-relative">
            <div className="tp-header-top tp-header-space d-none d-xl-block">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-xl-8">
                        <div className="tp-header-top-info">
                           <ul>
                              <li>
                                 <a href="https://www.google.com/maps/place/FAMZ/@24.8844045,67.1249211,18.69z/data=!4m6!3m5!1s0x3eb3397205af7677:0x9c2d3bab97965b42!8m2!3d24.8846217!4d67.1256706!16s%2Fg%2F11n0pbgynd?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"><span>
                                       <i className="fa-sharp fa-solid fa-location-dot"></i>
                                    </span></a>
                              </li>
                              <li>
                                 <a href="mailto:info@famz.net.pk"><span>
                                    <i className="fa-solid fa-envelope"></i></span>info@famz.net.pk
                                 </a>
                              </li>
                           
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-4">
                        <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                           <div className="header-call">
                              <a href="tel:+92-331-2788903"><i className="fa-solid fa-phone"></i>+92-331-2788903</a>
                           </div>
                           <div className="header-social d-xxl-block d-none">
                              <Link href="https://www.facebook.com/FAMZsupplychain"><i className="fa-brands fa-facebook"></i> Facebook</Link>
                              <Link href="#"><i className="fa-brands fa-linkedin"></i> Linkedin</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="header-sticky"
               className={`tp-header-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
               <div className="tp-header-bottom-space p-relative">
                  <div className="container-fluid gx-0">
                     <div className="row gx-0 align-items-center">
                        <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-left d-flex align-items-center p-relative">
                              <div className="tp-header-hamburger-btn offcanvas-open-btn"
                                 style={{ backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)` }}
                                 onClick={() => setSidebarOpen(true)}>
                                 <button className="hamburger-btn">
                                    <span> <HamburgerBtn /></span>
                                 </button>
                              </div>
                              <div className="tp-header-logo">
                                 <Link href="/">
                                    <Image src={Logo} alt="theme-pure" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 d-none d-xl-block">
                           <div className="tp-main-menu-area counter d-flex align-items-center">
                              <div className="tp-main-menu menu-icon">
                                 <span className="header-icon"><HomeIcon /></span>
                                 <nav id="tp-mobile-menu">
                                    <NavMenu />
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                              <div className="tp-header-search search-open-btn d-none d-xxl-block">
                                 <button onClick={() => setSearchOpen(true)}><i className="fa-regular fa-magnifying-glass"></i></button>
                              </div>
                              <div className="tp-header-btn d-none d-xl-block pl-40">
                                 <Link className="tp-btn" href="/contact">Get Started Today</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>
   );
};

export default HeaderOne;