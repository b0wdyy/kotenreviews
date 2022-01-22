import {
  Container,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function Index() {
  return (
    <Container>
      <Heading as="h1" mb={4}>
        Welkom op Kotenreviews!
      </Heading>
      <Text>
        Jouw nr.1 plaats voor reviews te vinden over jouw toekomstig kot. Begin
        met hieronder een stad, postcode of kot in te typen.
      </Text>

      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="Zoek een kot" />
        <InputRightElement>
          <IconButton
            _focus={{ outline: "none" }}
            aria-label="Zoek kot"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}

export default Index;
