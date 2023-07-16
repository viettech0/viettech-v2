import { Flex, Heading, HStack, Link, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Header = () => {
  return (
    <Flex justify="space-between" w="100%">
      <Heading>
        <span style={{ fontWeight: 400 }}>Viet</span>
        <span>Tech</span>
      </Heading>
      <HStack spacing={16}>
        <Link href="/#about">ABOUT</Link>
        <Link href="/#our-work">OUR WORK</Link>
        <Link href="/posts">COMMUNITY POSTS</Link>
      </HStack>
      <Box textAlign="center" alignSelf="center" background="#000000" py={4}>
        <Link as={NextLink} href="/" px={6} variant="withBackground">
          Connect With Us &rarr;
        </Link>
      </Box>
    </Flex>
  );
};
