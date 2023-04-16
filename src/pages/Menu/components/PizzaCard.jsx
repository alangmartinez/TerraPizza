import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function PizzaCard({ pizza }) {
  const { AddToCart } = useContext(CartContext);
  const toast = useToast();


  return (
    <Card maxW="sm" h="full" bgColor="whiteAlpha.900">
      <Image
        src={pizza.thumbnail}
        alt={pizza.description}
        h="full"
        w="full"
        maxW={380}
        flex={2}
        objectFit="cover"
      />
      <CardBody maxH="131px">
        <VStack justify="space-between" h="full" align="start" spacing={3}>
          <HStack
            justify="space-between"
            align="center"
            w="full"
            fontFamily="title"
          >
            <Text fontSize="lg" fontWeight="bold" fontFamily="title">
              {pizza.name}
            </Text>
            <Text fontSize="md">EUR ${pizza.price}</Text>
          </HStack>
          <Text
            color="brand.gray"
            h="full"
            fontSize="15px"
            fontFamily="title"
            fontWeight="thin"
          >
            {pizza.description}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Button
        variant='ghost'
          w="full"
          colorScheme="green"
          textAlign="center"
          alignContent="center"
          fontSize="md"
          fontFamily="title"
          onClick={() => {
            AddToCart(pizza)
            toast({
              title: "Added to cart",
              status: "success",
              duration: 2000,
              isClosable: false,
            });
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
