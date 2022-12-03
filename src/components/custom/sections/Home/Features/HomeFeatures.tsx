import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import FeatureCard from "./FeatureCard";

const HomeFeatures: React.FC<{}> = () => {
  const featuresData = [
    {
      serviceName: "Restaurants",
      serviceIcon:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Sightseeing",
      serviceIcon:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },

    {
      serviceName: "Shops & Boutiques",
      serviceIcon:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },

    {
      serviceName: "Where to Stay",
      serviceIcon:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
  ];
  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {featuresData.map((feature: any, idx: number) => (
          <FeatureCard key={idx} featureData={feature} />
        ))}
      </Grid>
    </Box>
  );
};

export default HomeFeatures;
