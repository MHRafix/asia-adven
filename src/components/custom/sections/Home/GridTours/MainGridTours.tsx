import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../../../../common/SectionTitle/SectionTitle";
import TourGridCard from "./TourGridCard";

const MainGridTours: React.FC<{}> = () => {
  const servicesData = [1, 2, 3, 4, 5, 6];
  return (
    <Box my={16}>
      <SectionTitle>Perfect Holidays</SectionTitle>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {servicesData.map((service: any, idx: number) => (
          <TourGridCard key={idx} tourData={service} />
        ))}
      </Grid>
    </Box>
  );
};

export default MainGridTours;
