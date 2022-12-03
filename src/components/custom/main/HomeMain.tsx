import { Box } from "@chakra-ui/react";
import React from "react";
import HomeFeatures from "../sections/Home/Features/HomeFeatures";
import MainGridTours from "../sections/Home/GridTours/MainGridTours";
import SearchArea from "../sections/Home/HomeSearch/SearchArea";
import ServiceMain from "../sections/Home/Services/ServiceMain";
import HomeSlider from "../sections/Home/Sliders/HomeSlider";

const HomeMain: React.FC<{}> = () => {
  return (
    <>
      <HomeSlider />
      <SearchArea />
      <Box w="85%" mx="auto">
        <ServiceMain />
        <MainGridTours />
        <HomeFeatures />
      </Box>
    </>
  );
};

export default HomeMain;
