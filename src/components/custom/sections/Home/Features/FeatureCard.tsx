import { GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const FeatureCard: React.FC<{ featureData: any }> = ({ featureData }) => {
  return (
    <GridItem textAlign="center" bg="#fff" py={5} px={2} borderRadius={5}>
      <Image
        src={featureData.serviceIcon}
        alt="serviceIcon"
        width={80}
        height={80}
      />
      <Text
        fontWeight={700}
        fontSize={17}
        mb={3}
        color="#333"
        cursor="pointer"
        _hover={{
          color: "#000",
          transition: ".3s",
        }}
        style={{
          marginTop: "20px",
        }}
      >
        {featureData.serviceName}
      </Text>
      <Text fontSize={14} color="#333">
        {featureData.serviceDesc.slice(0, 50)}...
      </Text>
    </GridItem>
  );
};

export default FeatureCard;
