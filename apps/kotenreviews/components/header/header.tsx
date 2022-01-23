import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="nav" justify="space-between" px="4rem" py="2.5rem">
      <Text letterSpacing={4} fontWeight="bold">
        KotenReviews
      </Text>

      <Flex>
        <Text mr={32}>koten</Text>
        <Text mr={32}>faq</Text>
        <Text>contact</Text>
      </Flex>
    </Flex>
  );
}

export default Header;
