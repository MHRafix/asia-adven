import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../../../../common/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceMain: React.FC<{}> = () => {
  const servicesData = [
    {
      serviceName: "Visa Processing",
      serviceIcon: "https://cdn-icons-png.flaticon.com/512/857/857175.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Student Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/3135/3135810.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
    {
      serviceName: "Treatment Visa",
      serviceIcon: "https://cdn-icons-png.flaticon.com/128/2968/2968946.png",
      serviceDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nulla.",
    },
  ];
  return (
    <Box>
      <SectionTitle>We Provide Services</SectionTitle>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {servicesData.map((service: any, idx: number) => (
          <ServiceCard key={idx} serviceData={service} />
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceMain;
