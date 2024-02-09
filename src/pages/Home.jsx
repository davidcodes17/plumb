import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import TopMan from "../layouts/TopMan";
import Hero from "../layouts/Hero";
import FeaturedServices from "../layouts/FeaturedServices";
import HeroSub from "../layouts/HeroSub";
import Testimonies from "../layouts/Testimonies";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <Box p={{sm : 5, base : 5}}>
      {/* <TopMan /> */}
      <Box
        borderRadius={40}
        bgImage={"url('/plum.jpg')"}
        mx={{lg : 5, md : 5, sm : 0, base : 2}}
        my={5}
        width={"97%"}
        bgSize={"cover"}
      >
        <Box className="bg" px={10} pb={5} borderRadius={40}>
          <Header />
          <Hero />
        </Box>
      </Box>
      <HeroSub />
      <Box px={5} pt={{lg : "150px", md : "100px", sm : "80px", base : 100}}>
        <FeaturedServices />
        <Testimonies />
      </Box>
      <Footer /> 
    </Box>
  );
};

export default Home;
