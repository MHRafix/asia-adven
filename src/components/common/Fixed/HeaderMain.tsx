import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import TopBar from "./TopBar";

const HeaderMain: React.FC<{}> = () => {
  return (
    <Box position="absolute" top="0" width="100%" zIndex="99999">
      <TopBar />
      <Header />
    </Box>
  );
};

export default HeaderMain;
