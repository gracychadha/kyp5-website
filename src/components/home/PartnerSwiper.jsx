import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
} from "@chakra-ui/react";

function PartnerSwiper() {
  const partners = [
    "/assets/images/brand/08.svg",
    "/assets/images/brand/09.svg",
    "/assets/images/brand/10.svg",
    "/assets/images/brand/11.svg",
    "/assets/images/brand/12.svg",
  ];

  const [current, setCurrent] = useState(0);

  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + itemsPerView >= partners.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? partners.length - itemsPerView : prev - 1
    );
  };

  // 🔁 autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = partners.slice(
    current,
    current + itemsPerView
  );

  return (
    <Box maxW="1200px" mx="auto" py={10} position="relative">
      
      <Flex gap={6} justify="center">
        {visibleItems.map((img, i) => (
          <Box
            key={i}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
          >
            <Image
              src={img}
              alt="partner"
              maxH="50px"
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>

      {/* Buttons */}
     
    </Box>
  );
}

export default PartnerSwiper;