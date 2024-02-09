import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NavAnimate = ({ text }) => {
  return (
    <Box>
      <Text className="anim" fontWeight={700}>
        {text}
      </Text>
    </Box>
  );
};

export default NavAnimate;
