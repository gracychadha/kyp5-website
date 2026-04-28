import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Brand() {
  const [partners, setPartners] = useState([]);
  const [current, setCurrent] = useState(0);

  const itemsPerView = 5;

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "partners")
      .then((response) => {
        setPartners(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + itemsPerView >= partners.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [partners]);

  const visibleItems = partners.slice(
    current,
    current + itemsPerView
  );

  return (
    <Box py={20} >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Left Title */}
        <Box minW="150px">
          <Text fontWeight="bold" fontSize="xxl" color="blue.900">
            Trusted by:
          </Text>
        </Box>

        {/* Right Slider */}
        <Flex gap={6} flex="1" justify="center">
          {visibleItems.map((partner) => (
            <Box
              key={partner.id}
              p={4}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minW="120px"
              h="80px"
            >
              <Image
                src={
                  partner.logo
                    ? import.meta.env.VITE_BASE_URL.replace(
                        "/api/public/",
                        ""
                      ) + partner.logo
                    : "/assets/images/brand/08.svg"
                }
                alt="brand"
                maxH="50px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Brand;