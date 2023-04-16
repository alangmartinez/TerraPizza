import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Button, HStack, Text } from "@chakra-ui/react";
import PizzaCard from "./PizzaCard";

export default function Pizzas({ pizzas }) {
  return (
    <>
      <Grid
        w="full"
        maxH="100vh"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={8}
      >
        {pizzas?.slice(0, 8).map((pizza, i) => {
          return (
            <GridItem key={i}>
              <PizzaCard pizza={pizza} />
            </GridItem>
          );
        })}
      </Grid>
      <HStack justify="space-between" w="full" align="center">
        <Button
          leftIcon={<ChevronLeftIcon />}
          colorScheme="green"
          boxShadow="dark-lg"
        >
          Previous
        </Button>
        <HStack spacing={4}>
          <Button
            colorScheme="green"
            variant="outline"
            fontSize="xl"
            boxShadow="dark"
          >
            1
          </Button>
          <Button
            colorScheme="green"
            variant="outline"
            fontSize="xl"
            boxShadow="dark"
          >
            2
          </Button>
          <Button
            colorScheme="green"
            variant="outline"
            fontSize="xl"
            boxShadow="dark"
          >
            3
          </Button>
        </HStack>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="green"
          boxShadow="dark-lg"
        >
          Next
        </Button>
      </HStack>
    </>
  );
}
