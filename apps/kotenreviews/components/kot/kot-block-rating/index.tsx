import { CircularProgress, Flex, Text } from "@chakra-ui/react";

interface KotBlockRatingProps {
  rating: number;
  kotName: string;
  kotLogo: string;
}

const index = ({ rating, kotName, kotLogo }: KotBlockRatingProps) => {
  return (
    <Flex rounded="md" p={4} boxShadow="md" w="100%" justify="space-between">
      <h3>{kotName}</h3>

      <Flex flexDir="column">
        <CircularProgress value={rating} />
        <Text>Gemiddelde rating</Text>
      </Flex>
    </Flex>
  );
};

export default index;
