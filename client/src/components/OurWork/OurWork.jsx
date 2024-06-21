import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Heading, Text, AspectRatio } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const imagePaths = [
  '/assets/images/path1.PNG',
  '/assets/images/path22.PNG',
  '/assets/images/path3.PNG',
  '/assets/images/path4.PNG',
  '/assets/images/path5.PNG',
  '/assets/images/path6.PNG',
  '/assets/images/path7.PNG',
  '/assets/images/path8.PNG',
  '/assets/images/path9.PNG',
  '/assets/images/path10.PNG',
  '/assets/images/path11.PNG',
  '/assets/images/path12.PNG',
  '/assets/images/path13.PNG',
  '/assets/images/path14.PNG',
  '/assets/images/path15.PNG',
  '/assets/images/path16.PNG'
];

// displays the work portfolio.
export const WorkSection = () => {
  const [currentSet, setCurrentSet] = useState(
    imagePaths.map((path, index) => ({ path, key: `image-${index}` }))
  );
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Handler for opening the lightbox
  const handleOpenLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Box id="work" py={16} px={4}>
      <Heading as="h3" textAlign="center" mb={4}>
        OUR WORK
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={16}>
        What we've done for people
      </Text>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={4}>
        {currentSet.map(({ path, key }, index) => (
          <AnimatePresence key={key}>
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpenLightbox(index)}
            >
              <AspectRatio ratio={1}>
                <Image
                  src={path}
                  alt={`Work image ${index}`}
                  objectFit="cover"
                  borderRadius="md"
                  boxSize="100%"
                  cursor="pointer"
                />
              </AspectRatio>
            </motion.div>
          </AnimatePresence>
        ))}
      </Grid>
      {isOpen && (
        <Lightbox
          mainSrc={currentSet[photoIndex].path}
          nextSrc={currentSet[(photoIndex + 1) % currentSet.length].path}
          prevSrc={currentSet[(photoIndex + currentSet.length - 1) % currentSet.length].path}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentSet.length - 1) % currentSet.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentSet.length)}
        />
      )}
    </Box>
  );
};
