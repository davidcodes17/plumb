import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Whatwedo = () => {
  return (
    <Box p={{ lg: 20, md: 20, sm: 10, base: 10 }} bg={"#fff"} color={"rgb(6, 24, 41)"} borderRadius={20}>
      <Text>Why Choose Us?</Text>
      <Heading
        fontFamily={"Anton"}
        fontSize={{ lg: 60, md: 50, sm: "30px", base: "30px" }}
        py={4}
      >
        We Love What We Do{" "}
      </Heading>
      <Text>PRIVILEGED TO SERVE 55,000 CUSTOMERS FOR OVER 22 YEARS</Text>
      <Box lineHeight={"30px"}>
        <li>100 % SATISFACTION GUARANTEE</li>
        <li>HIGHEST QUALITY OF WORKMANSHIP & PRODUCTS</li>
        <li>UP FRONT PRICING – SO YOU KNOW</li>
        <li>THE EXACT PRICE BEFORE THE TECH BEGINS TO WORK BUNDLE PACKAGE</li>
        <li>DEALS TO ENSURE</li>
        <li>THE BEST PRICES</li>
        <li>FOR OUR CLIENTS</li>
        <li>PERSONALIZED &</li>
        <li>CUSTOMIZABLE</li>
        <li>SERVICE BY OUR ELITE CREW OF TECHNICIANS</li>
        <li>COURTESY CALL WHEN OUR TECH IS ON THE WAY</li>
        <li>
          OFFERING THE BEST WARRANTIES TO OUR CLIENTS & GUARANTEE YOUR
          SATISFACTION OR WE DO THE WORK AGAIN FOR FREE!
        </li>
        <li>TRUST CERTIFIED TECHNICIANS</li>
      </Box>
    </Box>
  );
};

export default Whatwedo;
