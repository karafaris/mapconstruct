import React, { useEffect } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar/Navbar';
// import { ImageCarousel } from '../../components/Carousel/Carousel'; // Remove this line
import { CustomerReviews } from '../../components/Testimonials/Reviews'; 
import { WorkSection } from '../../components/OurWork/OurWork';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

// Import the banner image
import bannerImage from '../../images/bannerImage.jpg';

export const Home = ({ Component, Component2, Component3, componentBehavior }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Component]);

  return (
    /* Components requiring dynamic behavior are here */
    <Flex flexDirection='column'>
      <Navbar />
      <Image src={bannerImage} alt="Banner Image" maxHeight="80vh"  />
      {Component}
      {Component2 ? Component2 : null}
      {componentBehavior === "RenderTestimonials" ? <CustomerReviews /> : null}
      {Component3 ? Component3 : null}
      {componentBehavior === "DontRenderWorkSection" ? null : <WorkSection />}
      <Contact />
      <Footer />
    </Flex>
  );
};
