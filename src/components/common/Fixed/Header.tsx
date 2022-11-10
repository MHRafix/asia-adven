import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { headerNavigation } from "../../../config/data/HeaderNavigation";
import NavItem from "./NavItem";

const Header: React.FC<{}> = () => {
  return (
    <Box bg="white" py={4} px="1%" shadow="lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>Logo</Box>
        <Flex justifyContent="flex-start">
          {headerNavigation.map((nav: any, idx: number) => (
            <NavItem key={idx} nav={nav} />
          ))}
        </Flex>
        <Flex>Icons</Flex>
      </Flex>
    </Box>
  );
};

export default Header;
