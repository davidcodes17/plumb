import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import TopMan from "../layouts/TopMan";
import Hero from "../layouts/Hero";
import FeaturedServices from "../layouts/FeaturedServices";
import HeroSub from "../layouts/HeroSub";
import Testimonies from "../layouts/Testimonies";
import Footer from "../layouts/Footer";
import PlumbIndustry from "../layouts/PlumbIndustry";
import Whatwedo from "../layouts/Whatwedo";

const Home = () => {
  return (
    <Box p={{sm : 5, base : 5}}>
      {/* <TopMan /> */}
      <Box
        borderRadius={40}
        bgImage={"url('/plum.jpg')"}
        mx={{lg : 5, md : 5, sm : 0, base : 0}}
        my={5}
        width={{lg : "97%", md : "98%", sm : "99%", base : "100%"}}
        bgSize={"cover"}
      >
        <Box className="bg" px={{lg : 10, md : 10, sm : 5, base :5}} pb={5} borderRadius={40}>
          <Header />
          <Hero />
        </Box>
      </Box>
      <HeroSub />
      <Box pt={{lg : "200px", md : "150px", sm : "80px", base : 100}}>
        <PlumbIndustry />
        <FeaturedServices />
        <Whatwedo />
        <Testimonies />
      </Box>
      <Footer /> 
    </Box>
  );
};

export default Home;
