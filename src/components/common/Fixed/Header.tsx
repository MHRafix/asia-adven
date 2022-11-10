import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { headerNavigation } from "../../../config/data/HeaderNavigation";

const Header: React.FC<{}> = () => {
  return (
    <Box bg="white" py={4} px="1%" shadow="lg">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>Logo</Box>
        <Flex justifyContent="flex-start">
          {headerNavigation.map((nav: any, idx: number) => (
            <Link key={idx} href={nav.mainHref} passHref>
              <Text
                mx={10}
                cursor="pointer"
                fontWeight="semibold"
                fontSize={15}
                _hover={{
                  color: "primary",
                  transition: ".3s",
                }}
              >
                {nav.menuName}
              </Text>
            </Link>
          ))}
        </Flex>
        <Flex>Icons</Flex>
      </Flex>
    </Box>
  );
};

export default Header;
