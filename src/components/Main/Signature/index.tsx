import { Flex, Heading, Grid, VStack, Box } from '@chakra-ui/react';

export default function Signature() {
  return (
    <Flex justifyContent="space-between" w="100%" alignItems="center">
      <VStack spacing={6} display="flex" alignItems="start">
        <Heading variant="action" px={6} py={2} as="h3">
          FIND
        </Heading>
        <Heading as="h2" size="4xl">
          COMMUNITY
        </Heading>
      </VStack>
      <Grid templateColumns="repeat(4, 80px)" templateRows="repeat(5, 80px)" autoFlow="row">
        <Box />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" borderBottom="none" />
        <Box />
        <Box />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" borderRight="none" />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" borderLeft="none" />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" borderLeft="none" />
        <Box />
        <Box borderColor="navy" borderStyle="solid" borderWidth="1px" borderTop="none" />
        <Box
          borderColor="navy"
          borderStyle="solid"
          borderWidth="1px"
          borderTop="none"
          borderLeft="none"
          background="navy"
        />
        <Box
          borderColor="navy"
          borderStyle="solid"
          borderWidth="1px"
          borderTop="none"
          borderLeft="none"
        />
        <Box />
        <Box borderRight="solid 1px" borderRightColor="navy" />
        <Box
          borderColor="navy"
          borderStyle="solid"
          borderWidth="1px"
          borderTop="none"
          borderLeft="none"
        />
        <Box
          borderColor="navy"
          borderStyle="solid"
          borderWidth="1px"
          borderTop="none"
          borderLeft="none"
        />
        <Box />
        <Box borderRight="solid 1px" borderRightColor="navy" />
        <Box
          borderColor="navy"
          borderStyle="solid"
          borderWidth="1px"
          borderLeft="none"
          borderTop="none"
        />
        <Box />
      </Grid>
    </Flex>
  );
}
