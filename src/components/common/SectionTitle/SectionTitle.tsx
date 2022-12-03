import { Box } from "@chakra-ui/react";
import React from "react";

const SectionTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Box my={5} fontSize={40} fontWeight={700} textAlign="center">
      {children}
    </Box>
  );
};

export default SectionTitle;
