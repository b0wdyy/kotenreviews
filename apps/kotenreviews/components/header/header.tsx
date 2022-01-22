import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="nav" justify="space-between" p={24}>
      <Text letterSpacing={4} fontWeight="bold">KotenReviews</Text>

      <Flex>
        <Text>koten</Text>
        <Text>faq</Text>
        <Text>contact</Text>
      </Flex>
    </Flex>
  );
}

export default Header;
