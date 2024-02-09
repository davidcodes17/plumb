import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Testimony = ({ name, company, testimony, image }) => {
  return (
    <Box
      width={{ lg: 400, md: 300, sm: "100%  ", base: "100%" }}
      my={5}
      height={{ lg: 200, md: 150, sm: "100%", base: "100%" }}
      as={motion.div}
      borderRadius={20}
      whileHover={{ boxShadow: "0px 0px 10px #000" }}
    >
      <Flex flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}>
        <Image
          src={image}
          width={{ lg: 200, md: 150, sm: "100%", base: "100%" }}
          height={{ lg: 200, md: 150, sm: "200px", base: "200px" }}
          borderLeftRadius={{ lg: 20, md: 20, sm: 0, base: 0 }}
          borderTopRadius={{ lg: 0, md: 0, sm: 20, base: 20 }}
          objectFit={"cover"}
        />
        <Box
          bg={"#fff"}
          width={{ lg: 200, md: 150, sm: "100%", base: "100%" }}
          height={{ lg: 200, md: 150, sm: "200px", base: "200px" }}
          color={"rgb(6, 24, 41)"}
          p={{lg : 5, md : 5, sm : 10, base : 10}}
          borderRightRadius={{ lg: 20, md: 20, sm: 0, base: 0 }}
          borderBottomRadius={{ lg: 0, md: 0, sm: 20, base: 20 }}
        >
          <Flex
            gap={{ lg: 2, md: 2, sm: 5, base: 5 }}
            alignItems={"center"}
            pb={{ lg: 2, md: 0, sm: 2, base: 2 }}
            flexWrap={"wrap"}
          >
            <Text
              fontWeight={800}
              fontSize={{ lg: 15, md: 20, sm: 20, base: 15 }}
            >
              {name}
            </Text>
            <Text
              bg={"rgb(6, 24, 41)"}
              color={"#fff"}
              p={1}
              borderRadius={40}
              px={4}
              fontSize={12}
              fontWeight={500}
            >
              {company}
            </Text>
          </Flex>
          <Text
            fontWeight={"400"}
            fontSize={{ lg: 10, md: 10, sm: 15, base: 12 }}
          >
            {testimony}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
