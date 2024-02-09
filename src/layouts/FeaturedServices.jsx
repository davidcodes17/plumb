import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import FService from "../components/FService";

const FeaturedServices = () => {
  return (
    <Box py={20} mt={{ lg: 0, md: "400px" }}>
      <Heading
        textAlign={"center"}
        pb={{ lg: 10 }}
        fontFamily={"Anton"}
        fontSize={{ lg: 80, md: 70, sm: 40, base: "30px" }}
      >
        Featured Services
      </Heading>
      <Flex
        pt={{ sm: "30px", base: "30px" }}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={{lg : 10, md : 10, sm : 0, base : 0}}
        // alignItems={"center"}
      >
        <FService
          image={"plum.jpg"}
          text={"Water Heater Repair and Replacement"}
          des={
            "We won’t let the water run cold! Whether or not your hot water heater is in need of repair or replacement, we can handle the job"
          }
        />
        <FService
          image={"plum1.jpg"}
          text={"Tankless Water Installation"}
          des={
            "Tankless units are the modern, energy-efficient alternative to traditional water heaters. We can install, maintain and repair your tankless water heater for you!"
          }
        />

        <FService
          image={"plum2.jpg"}
          text={"Whole-Home Repiping"}
          des={
            "If you’re consistently dealing with problems like rusty water, low water pressure or frequent leaks, repiping your home might be your best course of action. Let us evaluate your pipes."
          }
        />
      </Flex>
    </Box>
  );
};

export default FeaturedServices;
