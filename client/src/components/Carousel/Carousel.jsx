import React from 'react';
import { Box, Image } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import image1 from '/assets/images/bobcat.JPG';
import image2 from '/assets/images/porchBefore.jpg';
import image3 from '/assets/images/porchAfter.JPG';

export const ImageCarousel = () => {
  const slides = [
    {
      img: image1,
      alt: 'bobcat-working-on-digging-mapconstructkc',
    },
    {
      img: image2,
      alt: 'house-rehab-mapconstructkc',
    },
    {
      img: image3,
      alt: 'house-rehab-outsideview-mapconstructkc',
    },
  ];

  return (
    <Box width="full" maxWidth="600px" margin="auto">
   <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 2500, // Delay in ms before transitioning to the next slide
            disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        >
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
            <Image src={slide.img} alt={slide.alt} objectFit="cover" width="100%" height="100%" />
            </SwiperSlide>
        ))}
        </Swiper>
    </Box>
  );
};
