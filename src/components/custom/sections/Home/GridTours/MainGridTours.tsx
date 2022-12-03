import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../../../../common/SectionTitle/SectionTitle";
import TourGridCard from "./TourGridCard";

const MainGridTours: React.FC<{}> = () => {
  const servicesData = [
    {
      destinationName: "Taragoanna",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-40-650x650.jpg",
      rating: 5,
      price: 1740,
    },
    {
      destinationName: "Madrid",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-41-650x650.jpg",
      rating: 5,
      price: 1740,
    },
    {
      destinationName: "Barcelona",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-42-650x650.jpg",
      rating: 5,
      price: 1740,
    },
    {
      destinationName: "Koahsiung",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-43-650x650.jpg",
      rating: 5,
      price: 1740,
    },
    {
      destinationName: "Taipei",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-44-650x650.jpg",
      rating: 5,
      price: 1740,
    },
    {
      destinationName: "Saminyak",
      backgroundImage:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-47-650x650.jpg",
      rating: 5,
      price: 1740,
    },
  ];
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
