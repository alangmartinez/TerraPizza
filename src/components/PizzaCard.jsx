import {
  Button, Card, CardBody,
  CardFooter, HStack,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

export default function PizzaCard({ name, description, price, thumbnail }) {
  return (
    <Card bgColor='whiteAlpha.700' backdropFilter='auto' backdropBlur='md'>
      <Image
        src={`url('${thumbnail}')`}
        alt={description}
        h="full"
        w="full"
        maxW={380}
        flex={2}
        objectFit="cover"
      />
      <CardBody>
        <VStack justify='space-between' h='full' align='start'>
          <HStack justify="space-between" w="full">
            <Text fontSize="2xl" fontWeight="semibold">
              {name}
            </Text>
            <Text fontSize="xl">EUR ${price}</Text>
          </HStack>
          <Text color='text.primary'>{description}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button w="full" colorScheme="green" marginTop={6} boxShadow="xl">
          VIEW MORE
        </Button>
      </CardFooter>
    </Card>
  );
}
