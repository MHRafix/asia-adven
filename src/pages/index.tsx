import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import LayoutContainer from "../components/common/Layout/LayoutContainer";

const Home: NextPage = () => {
  return (
    <Box>
      <LayoutContainer
        title="Feel the threel"
        description='This is "Asia adventure Limited" home page.'
      >
        <Box>Home page document</Box>
      </LayoutContainer>
    </Box>
  );
};

export default Home;
