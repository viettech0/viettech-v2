import { Flex, Heading, HStack } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex justify="space-between">
      <Heading>VietTech</Heading>
      <HStack spacing={4}>
        <p>ABOUT</p>
        <p>OUR WORK</p>
        <p>COMMUNITY POSTS</p>
      </HStack>
      <p>Connect With Us</p>
    </Flex>
  );
};
