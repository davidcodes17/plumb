import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Sub from "../components/Sub";

const HeroSub = () => {
  return (
    <Box
      pos={{ lg: "absolute", md: "absolute", sm: "initial", base: "initial" }}
      top={{ lg: 650, md: 550, sm: 0, base: 0 }}
      mt={{lg : 0, md : 0,sm : 20,base : 10}}
    >
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr",
          md: "1fr 1fr",
          sm: "1fr",
          base: "1fr",
        }}
        justifyContent={"center"}
        gridGap={10}
        px={40}
      >
        <Sub number={100} text={"Air Conditioning Repairs and Install"} />
        <Sub number={150} text={"Plumbing Works and Fixes"} />
        <Sub number={250} text={"Customers are Satisfied with Our Services"} />
      </Grid>
    </Box>
  );
};

export default HeroSub;
