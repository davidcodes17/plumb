import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box my={10}>
      <Heading
        fontFamily={"Anton"}
        width={{ lg: 700, md: 600, sm: "100%", base: "100%" }}
        // color={"rgb(6, 24, 41)"}
        color={"#ddd"}
        fontSize={{ lg: 80, md: 60, sm: 50, base: 30 }}
      >
        Warmly greet visitors and briefly introduce your plumbing services.
      </Heading>
      <Flex
        gap={5}
        pt={8}
        alignItems={"center"}
        justifyContent={{
          lg: "left",
          md: "left",
          sm: "left",
          base: "left",
        }}
      >
        <Button
          width={150}
          py={7}
          borderRadius={30}
          bg={"rgb(6, 24, 41)"}
          color={"#fff"}
          _hover={"none"}
          fontFamily={"Gloock"}
        >
          Call Us Now !
        </Button>
        <Button
          fontSize={20}
          bg={"transparent"}
          fontFamily={"Gloock"}
          color={"#fff"}
          _hover={"none"}
          textDecoration={"underline"}
        >
          Book Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Hero;
