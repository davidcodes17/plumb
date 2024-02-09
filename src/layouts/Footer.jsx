import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <Box borderRadius={20} pt={{base : 20}} px={20} pb={20} mt={20} bg={"#fff"} color={"rgb(6, 24, 41)"}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} alignItems={"center"}>
        <Box>
          <Logo />
          <Text fontWeight={500} py={3}>
            &copy; All rights reserved @Plumbing&Air
          </Text>
        </Box>
        <Box fontSize={20} pt={{sm : 20, base : 10}}>
          <Text pb={4} fontSize={{lg : 40, md : 40, sm : "30px", base : "30px"}}>
            Navigation
          </Text>
          <Text>Home</Text>
          <Text>About Us</Text>
          <Text>Contact</Text>
          <Text>Services</Text>
          <Text>Connect with Us</Text>
        </Box>
        <Box pt={{sm : 20, base : 10}}>
          <Text pb={4} fontSize={{lg : 40, md : 40, sm : "30px", base : "20px"}}>
            Subscribe to Our <br /> Mailing List
          </Text>
          <Input width={{lg : "100%", md : "100%", sm : "100%", base : "100%"}} placeholder="you@gmail.com" /> <br />
          <Button
            bg={"rgb(6, 24, 41)"}
            color={"#fff"}
            _hover={"none"}
            width={{lg : "100%", md : "100%", sm : "100%", base : "100&"}}
            my={3}
          >
            Subscribe
          </Button>{" "}
          <br />
          <Checkbox>I accept and agree to the Terms and Conditions...</Checkbox>
          <br />
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
