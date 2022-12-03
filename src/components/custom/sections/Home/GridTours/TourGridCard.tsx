import { GridItem } from "@chakra-ui/react";

const TourGridCard: React.FC<{ tourData: any }> = ({ tourData }) => {
  return (
    <GridItem
      textAlign="center"
      bg="#fff"
      shadow="lg"
      py={5}
      px={2}
      bgImage="url('https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-40-650x650.jpg')"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      Hello
    </GridItem>
  );
};

export default TourGridCard;
