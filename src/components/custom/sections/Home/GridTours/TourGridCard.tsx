import { Box, GridItem, Text } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

const TourGridCard: React.FC<{ tourData: any }> = ({ tourData }) => {
  return (
    <GridItem
      display="flex"
      alignItems="end"
      w="252px"
      h="252px"
      p={5}
      bg="#fff"
      shadow="lg"
      py={5}
      px={2}
      bgImage={`url(${tourData.backgroundImage})`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box>
        <Text fontWeight={700} fontSize={18} color="white">
          {tourData.destinationName}
        </Text>

        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Text color="white" display="flex" alignItems="center">
            <HiStar size={20} /> &nbsp; {tourData.rating} Good
          </Text>
          <Text fontWeight={700} fontSize={18} color="white">
            $ {tourData.price}
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default TourGridCard;
