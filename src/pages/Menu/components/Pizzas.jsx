import React from 'react';
import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import PizzaCard from "./PizzaCard";



export default function Pizzas({pizzas}) {
  return (
    <Grid
    w="full"
    h="full"
    templateColumns="repeat(4, 1fr)"
    templateRows="repeat(4, 1fr)"
    gap={8}
  >
    {pizzas?.slice(0, 3).map((pizza, i) => {
      return (
        <GridItem key={i}>
          <PizzaCard {...pizza} />
        </GridItem>
      );
    })}
    <GridItem>
      <VStack h="full" justify="center" bgColor='gray.100' borderRadius='md' boxShadow='lg'>
        <Text
          w="full"
          align="center"
          color="black"
          fontWeight="extrabold"
          fontSize="2xl"
          textTransform="uppercase"
        >
          See More +
        </Text>
      </VStack>
    </GridItem>
  </Grid>
  )
}
