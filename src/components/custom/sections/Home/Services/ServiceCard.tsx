import { GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ServiceCard: React.FC<{ serviceData: any }> = ({ serviceData }) => {
  return (
    <GridItem
      textAlign="center"
      bg="#fff"
      shadow="lg"
      py={5}
      px={2}
      borderRadius={5}
    >
      <Image
        src={serviceData.serviceIcon}
        alt="serviceIcon"
        width={50}
        height={50}
        style={{
          borderRadius: "100px",
        }}
      />
      <Text
        fontWeight={500}
        fontSize={17}
        mb={1}
        color="#333"
        cursor="pointer"
        _hover={{
          color: "#000",
          transition: ".3s",
        }}
      >
        {serviceData.serviceName}
      </Text>
      <Text fontSize={14} color="#333">
        {serviceData.serviceDesc.slice(0, 30)}...
      </Text>
    </GridItem>
  );
};

export default ServiceCard;
