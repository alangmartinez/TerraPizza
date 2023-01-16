import { Box, VStack, Image, Text, Button, HStack } from "@chakra-ui/react";
import theme from "../theme/index";

export default function Card({
  name,
  description,
  price,
  thumbnail,
  toppings,
  stock,
}) {
  console.log(theme);

  return (
    <Box
      p={8}
      bgColor="whiteAlpha.600"
      borderRadius="lg"
      backdropFilter="auto"
      backdropBlur="lg"
      key={name}
      maxW="md"
      boxShadow="dark-lg"
    >
      <Image src={`url(${thumbnail})`} alt={description} w="300px" h="300px" />
      <VStack align="start" spacing={3}>
        <HStack justify="space-between" w="full">
          <Text fontSize="2xl" fontWeight="semibold">
            {name}
          </Text>
          <Text fontSize="xl">EUR ${price}</Text>
        </HStack>
        <Text color="#667085">{description}</Text>
        <VStack align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold">
            Toppings:
          </Text>
          <HStack>
            {toppings.slice(1, 4).map((topping) => (
              <Button variant="outline" colorScheme="green" key={topping}>
                {topping}
              </Button>
            ))}
            <Button variant="outline" colorScheme="green">
              More +
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Button w="full" colorScheme="green" marginTop={6}>
        View More
      </Button>
    </Box>
  );
}
