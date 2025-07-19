import img_1 from "@assets/img/softweb-portfolio/tangeloes.jpg";
import img_2 from "@assets/img/softweb-portfolio/fruit-veg.jpg";
import img_3 from "@assets/img/softweb-portfolio/nooni.jpg";
import img_4 from "@assets/img/softweb-portfolio/airportdriven.jpg";
import img_5 from "@assets/img/softweb-portfolio/innoscribe.jpg";
import img_6 from "@assets/img/softweb-portfolio/vs.jpg";
import img_7 from "@assets/img/softweb-portfolio/programmiers.jpg";
import img_8 from "@assets/img/softweb-portfolio/mdq.jpg";
export const categories = ['All', 'WordPress', 'Next.js', 'HTML'];

export const projects = [
  {
    id: 1,
    title: 'Tangeloes',
    category: 'WordPress',
    image: img_1,
    link: 'https://tangeloes.com/',
    description: 'Elegant product-focused website for a fruit business, built using WordPress and WooCommerce with a clean UI.',
    stack: ['WordPress', 'WooCommerce', 'Elementor'],
  },
  { 
    id: 2,
    title: 'Fruit and Veg',
    category: 'WordPress',
    image: img_2,
    link: 'https://www.fruitandveg.co.uk/',
    description: 'Fresh produce e-commerce store with an intuitive shopping experience and responsive design.',
    stack: ['WordPress', 'WooCommerce'],
  },
  {
    id: 3,
    title: 'Nooni Theme Demo',
    category: 'WordPress',
    image: img_3,
    link: 'https://demo.theme-sky.com/nooni/',
    description: 'Customized theme showcase for modern UI and product listing layout using WordPress.',
    stack: ['WordPress', 'Theme Customization'],
  },
  {
    id: 4,
    title: 'Airport Driven',
    category: 'WordPress',
    image: img_4,
    link: 'https://www.airportdriven.com/',
    description: 'Booking and service interface for a transport service, developed with responsiveness and accessibility in mind.',
    stack: ['WordPress', 'Elementor'],
  },
  {
    id: 5,
    title: 'Innoscribe Landing Page',
    category: 'Next.js',
    image: img_5,
    link: 'https://www.innoscribe.no/',
    description: 'Tech company landing page built using Next.js with smooth scroll and elegant layout.',
    stack: ['Next.js', 'SCSS'],
  },
  {
    id: 6,
    title: 'E-Commerce Demo',
    category: 'Next.js',
    image: img_6,
    link: 'https://ecommerce-website-ten-omega.vercel.app/',
    description: 'Headless e-commerce prototype built with Next.js, Stripe integration, and cart functionality.',
    stack: ['Next.js', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 7,
    title: 'Programmiers Portfolio',
    category: 'Next.js',
    image: img_7,
    link: 'https://programmiers.vercel.app/',
    description: 'Developer portfolio template featuring animations and clean UI components.',
    stack: ['Next.js', 'Framer Motion'],
  },
  {
    id: 8,
    title: 'Restaurant Site',
    category: 'HTML',
    image: img_8,
    link: 'https://mdq-restaurant.vercel.app/',
    description: 'Restaurant UI design with a focus on menu presentation and responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];
