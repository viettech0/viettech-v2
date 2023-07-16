import { VStack, Heading, Text, Box, Grid, GridItem } from '@chakra-ui/react';

export default function About() {
  return (
    <VStack id="about" spacing={36}>
      <VStack w="50%" spacing={8} display="flex" alignItems="start" position="relative" pb={12} pt={0} pr={6} pl={8}>
        <Heading as="h3" fontSize="36px">WHO WE ARE</Heading>
        <VStack spacing={6}>
          <Text>
            VietTech is a community for Vietnamese people interested in Tech. Our goals are twofold: to share information, insights and resources as a means to pay it forward, and to lower barriers to entry to the industry for the next generation, as well as to help them advance in their career. At VietTech, everyone has a chance to share their experiences or raise questions with no judgment and no disrespect.
          </Text>
          <Text>
            VietTech is run by a group of Vietnamese professionals working in the tech industry in the US, UK, Singapore, Japan, Vietnam and beyond. The majority of our work includes hosting a centralized online community platform, and organizing regular talks or Q&A sessions for insights from industry professionals.
          </Text>
        </VStack>
        <Box w="50px" h="50px" position="absolute" right={0} bottom={0} border="solid 1px" borderColor="navy" />
        <Box w="50px" h="50px" position="absolute" top={0} left={0} border="solid 1px" borderColor="navy" />
      </VStack>
      <Grid templateRows="repeat(6, 10px)" templateColumns="repeat(12, 1fr)" w="100%">
        <GridItem colStart={1} colEnd={13} rowStart={4} rowEnd={5} h="1px" borderBottom="solid 1px" borderBottomColor="navy" />
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={3}
          rowEnd={5}
          h="15px"
          w="15px"
          borderRadius="50%"
          background="navy"
          alignSelf="center"
          justifySelf="center"
        />
        <GridItem
          colStart={3}
          colEnd={5}
          rowStart={3}
          rowEnd={5}
          h="15px"
          w="15px"
          borderRadius="50%"
          background="navy"
          alignSelf="center"
          justifySelf="center"
        />
        <GridItem
          colStart={11}
          colEnd={13}
          rowStart={3}
          rowEnd={5}
          h="15px"
          w="15px"
          borderRadius="50%"
          background="navy"
          alignSelf="center"
          justifySelf="center"
        />
      </Grid>
    </VStack>
  );
}