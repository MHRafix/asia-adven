import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import LayoutContainer from "../components/common/Layout/LayoutContainer";
import HomeMain from "../components/custom/main/HomeMain";

const Home: NextPage = () => {
  return (
    <Box>
      <LayoutContainer
        title="Feel the threel"
        description='This is "Asia adventure Limited" home page.'
      >
        <HomeMain />
      </LayoutContainer>
    </Box>
  );
};

export default Home;
