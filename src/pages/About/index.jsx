import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import profile from "../../assets/profile/profile.jpg";
import pizza from "../../assets/images/favicon.png";

export default function index() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      as="section"
      id="about"
      align={{ base: "center", lg: "center" }}
      justify="space-around"
      p={32}
      paddingY={40}
      spacing={24}
      w="full"
      h="100vh"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={16}
        templateRows="repate(2, 1fr)"
        flex={1.2}
      >
        <GridItem colStart={1} colEnd={2}>
          <VStack spacing={4}>
            <Text fontWeight="bold" fontSize="6xl">
              2+
            </Text>
            <Text fontWeight="medium" fontSize="2xl">
              Years of experience
            </Text>
            <Text color="#667085" textAlign="center">
              Established since 2021 in Bahia Blanca, Argentina. We are a team
              of 4 people with a lot of experience in the field of pizza making.
            </Text>
          </VStack>
        </GridItem>
        <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={3}>
          <VStack spacing={4}>
            <Text fontWeight="bold" fontSize="6xl">
              13+
            </Text>
            <Text fontWeight="medium" fontSize="2xl">
              Pizza flavors
            </Text>
            <Text color="#667085" textAlign="center">
              We have all the classic flavors, and we also have traditional and
              new flavors, such as the "Papa Frita" pizza, which is a pizza with
              french fries on top or the "Chorizo" pizza, which is a pizza with
              chorizo on top.
            </Text>
          </VStack>
        </GridItem>
        <GridItem colStart={2} colEnd={3}>
          <VStack spacing={4}>
            <Text fontWeight="bold" fontSize="6xl">
              3
            </Text>
            <Text fontWeight="medium" fontSize="2xl">
              Locations
            </Text>
            <Text color="#667085" textAlign="center">
              We have 2 stores open to the public, in the city of Bahia Blanca.
              <br />
              And one store that is only for delivery and takeout, located in
              the city of Monte Hermoso, Buenos Aires.
            </Text>
          </VStack>
        </GridItem>
        <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={3}>
          <VStack spacing={4}>
            <Text fontWeight="bold" fontSize="6xl">
              756+
            </Text>
            <Text fontWeight="medium" fontSize="2xl">
              Followers
            </Text>
            <Text color="#667085" textAlign="center">
              The Terra Pizza Family!
              <br />
              We have more than 756 followers on our social networks. Feel free
              to be part of the Terra Pizza Family!
              <br />
              By following us on our social networks.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      <VStack p={16} flex={1} align="start" w="full">
        <Text
          color="#717590"
          textAlign="start"
          marginBottom={10}
          fontSize="lg"
          fontWeight="black"
        >
          WHO WE ARE
        </Text>
        <HStack spacing={12} w="full" h="full" align="start">
          <Image
            src={profile}
            alt="Alan Martinez"
            w="310px"
            h="310px"
            borderRadius="full"
            boxShadow="2xl"
            objectFit="cover"
          />
          <VStack align="start" justify="space-between" h="full">
            <HStack spacing={3} marginBottom="22px">
              <Image maxW="50px" h="50px" src={pizza} alt="pizza icon" />
              <Heading as="h2" color="green.700" fontSize="5xl">
                Terra Pizza!
              </Heading>
            </HStack>
            <Text fontWeight="medium" fontSize="2xl">
              Hi! I'm Alan Martinez
            </Text>
            <Text fontSize="lg" color="#667085" lineHeight="tall">
              The owner of Terra Pizza. I'm 26 years old and I'm from Bahia
              Blanca, Argentina.
              <br />
              I'm a pizza lover, and I decided to open my own pizza store.
              <br />I hope you enjoy our pizzas!
            </Text>
            <Button w="50%" size="lg" variant="outline">
              MORE ABOUT US
            </Button>
          </VStack>
        </HStack>
      </VStack>
      <HStack>
        <Image />
      </HStack>
    </Stack>
  );
}
