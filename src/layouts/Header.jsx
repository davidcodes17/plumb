import {
  Box,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import {
  Facebook,
  HambergerMenu,
  Instagram,
  Twitch,
  Whatsapp,
} from "iconsax-react";
import NavAnimate from "../components/NavAnimate";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex justifyContent={"space-between"} pt={"40px"} alignItems={"center"}>
      <Logo />
      <Flex
        gap={20}
        fontSize={15}
        display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
      >
        <NavAnimate text={"Home"} />
        <NavAnimate text={"About Us"} />
        <NavAnimate text={"Service"} />
        <NavAnimate text={"Contact"} />
        <NavAnimate text={"Connect with Us"} />
      </Flex>
      <Flex
        gap={5}
        display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
      >
        <Facebook variant="Bold" size={20} />
        <Whatsapp variant="Bold" size={20} />
        <Twitch variant="Bold" size={20} />
        <Instagram variant="Bold" size={20} />
      </Flex>
      <Box
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        display={{ lg: "none", md: "none", sm: "block", base: "block" }}
      >
        <HambergerMenu size={50} />
      </Box>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent color={"#000"}>
            <Flex alignItems={"center"} p={5} justifyContent={"space-between"}>
              <Logo />
              <Box onClick={onClose}>
                <CloseButton />
              </Box>
            </Flex>
            <Box
              color={"#000 !important"}
              py={10}
              px={10}
              lineHeight={"40px"}
              fontSize={"20px !important"}
            >
              <NavAnimate text={"Home"} />
              <NavAnimate text={"About Us"} />
              <NavAnimate text={"Service"} />
              <NavAnimate text={"Contact"} />
              <NavAnimate text={"Connect with Us"} />
              <Text fontWeight={700} fontSize={"30px"} pt={5}>
                Socials
              </Text>
              <Flex flexWrap={"wrap"} gap={5} pt={2}>
                <Facebook variant="Bold" size={40} />
                <Whatsapp variant="Bold" size={40} />
                <Twitch variant="Bold" size={40} />
                <Instagram variant="Bold" size={40} />
              </Flex>
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};

export default Header;
