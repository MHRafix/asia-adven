import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BsBasket3 } from "react-icons/bs";
import { RiBarChartHorizontalLine, RiSearchLine } from "react-icons/ri";
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
        <Flex w="100px" justifyContent="space-between" alignItems="center">
          <Box>
            <BsBasket3 size={22} />
          </Box>
          <Box>
            <RiSearchLine
              size={22}
              style={{
                transform: "rotate(80deg)",
              }}
            />
          </Box>
          <Box>
            <RiBarChartHorizontalLine
              size={22}
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
