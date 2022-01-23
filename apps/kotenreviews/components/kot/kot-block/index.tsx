import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Index() {
  return (
    <Flex d="inline-flex" boxShadow="md" rounded="md" overflow="hidden">
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>

      <Box p="2rem">
        <Heading mb={4}>Kot name</Heading>
        <Text maxW="md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aut facere odit officiis voluptatum. At debitis deserunt earum id
          labore quaerat quod repudiandae sunt! Aut corporis eum eveniet
          exercitationem fugiat incidunt laborum laudantium maiores nemo, non
          officiis rerum ullam voluptatem.
        </Text>
      </Box>
    </Flex>
  );
}
export default Index;
