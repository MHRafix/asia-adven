import React from "react";
import SearchArea from "../sections/HomeSearch/SearchArea";
import HomeSlider from "../sections/Sliders/HomeSlider";

const HomeMain: React.FC<{}> = () => {
  return (
    <>
      <HomeSlider />
      <SearchArea />
    </>
  );
};

export default HomeMain;
