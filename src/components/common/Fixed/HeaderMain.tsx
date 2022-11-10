import React from "react";
import HomeSlider from "../../custom/sections/sliders/HomeSlider";
import Header from "./Header";
import TopBar from "./TopBar";

const HeaderMain: React.FC<{}> = () => {
  return (
    <>
      <TopBar />
      <Header />
      <HomeSlider />
    </>
  );
};

export default HeaderMain;
