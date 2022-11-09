import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";

const TopBar: React.FC<{}> = () => {
  return (
    <Box bg="#1C1C1C" py="11px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        mx="auto"
        color="white"
      >
        <Flex>
          <Flex alignItems="center" mx={3}>
            <BsEnvelope color="#3FD0D4" size={16} /> &nbsp;&nbsp;&nbsp;
            <Text fontSize={13}>setsail@qode.com</Text>
          </Flex>
          <Flex alignItems="center" mx={3}>
            <MdPhone color="#3FD0D4" size={18} /> &nbsp;&nbsp;&nbsp;
            <Text fontSize={13}>+880 1611859722</Text>
          </Flex>
          <Flex alignItems="center" mx={3}>
            <MdOutlineLocationOn color="#3FD0D4" size={18} /> &nbsp;&nbsp;&nbsp;
            <Text fontSize={13}>Jamuna Future Park, Dhaka</Text>
          </Flex>
        </Flex>
        <Grid>L1</Grid>
      </Flex>
    </Box>
  );
};

export default TopBar;
