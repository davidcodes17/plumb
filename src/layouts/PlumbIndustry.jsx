import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const PlumbIndustry = () => {
  return (
    <Box bg={"#fff"} borderRadius={20} p={{lg : 20, md : 20, sm : 10, base : 10}} color={"rgb(6, 24, 41)"}>
      <Heading fontFamily={"Anton"} fontSize={{lg : 70, md : 60, sm : 40, base : 40}} pb={5}>
        Following Plumbing <br /> Industry Best Practices
      </Heading>
      <Text>
        We realize technology is continuously evolving and improving. That is
        why the technicians on our team attend training twice a week to polish
        their technical and customer service skills. Weekly training, combined
        with tools and technology of latest industry standards, ensures we are
        providing you with the greatest possible services. We also encourage our
        plumbers to provide you with professional tips and suggestions to
        provide you with a better understanding of your plumbing. If you
        understand the plumbing in your home, you can keep it maintained and
        efficient for years to come.
      </Text>
      <Text py={5}>
        Water leaks are very common and cost Americans hundreds of dollars every
        year in wasted water and water damage. Our plumbers can stop leaks in
        their tracks and provide long-lasting solutions.{" "}
      </Text>
      <Text>
        Whether you’re worried about a gas leak or you need your new property to
        be inspected, we can handle gas line services.{" "}
      </Text>
    </Box>
  );
};

export default PlumbIndustry;
