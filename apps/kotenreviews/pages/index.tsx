import { Container, Heading, Text, Box, VStack, Grid } from "@chakra-ui/react";
import KotBlock from "../components/kot/kot-block";
import KotBlockRating from "../components/kot/kot-block-rating";

export function Index() {
  return (
    <Container maxW="container.xl">
      <Box my={32} as="main" textAlign="center">
        <Heading as="h1" mb={4} fontSize={54}>
          Welkom op Kotenreviews!
        </Heading>
        <Text>
          Jouw nr.1 plaats voor reviews te vinden over jouw toekomstig kot.
        </Text>
      </Box>

      <Grid gridTemplateColumns="1fr 0.6fr" mt={12} gap={8}>
        <Box>
          <Heading as="h2" mb={4}>
            Koten met de meeste reviews
          </Heading>

          <VStack spacing={4} align="flex-start">
            <KotBlock />
            <KotBlock />
            <KotBlock />
            <KotBlock />
          </VStack>
        </Box>

        <Box w="100%">
          <VStack spacing={4} align="flex-start" w="100%">
            <KotBlockRating rating={20} kotName="Test" kotLogo={""} />
            <KotBlockRating rating={20} kotName="Test" kotLogo={""} />
            <KotBlockRating rating={20} kotName="Test" kotLogo={""} />
            <KotBlockRating rating={20} kotName="Test" kotLogo={""} />
          </VStack>
        </Box>
      </Grid>
    </Container>
  );
}

export default Index;
