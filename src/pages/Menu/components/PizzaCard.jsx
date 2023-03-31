import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PizzaCard({ name, description, price, thumbnail }) {
  return (
    <Card maxW="sm" h="full" bgColor="whiteAlpha.900">
      <Image
        src={thumbnail}
        alt={description}
        h="full"
        w="full"
        maxW={380}
        flex={2}
        objectFit="cover"
      />
      <CardBody>
        <VStack justify="space-between" h="full" align="start" spacing={4}>
          <HStack justify="space-between" w="full">
            <Text fontSize="2xl" fontWeight="semibold">
              {name}
            </Text>
            <Text fontSize="xl">EUR ${price}</Text>
          </HStack>
          <Text color="text.primary" h="full">
            {description}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
          w="full"
          colorScheme="green"
          textAlign="center"
          alignContent="center"
          size="lg"
          boxShadow="lg"
        >
          SEE MORE
        </Button>
      </CardFooter>
    </Card>
  );
}
