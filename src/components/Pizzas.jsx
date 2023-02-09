import { Grid, GridItem } from "@chakra-ui/react";
import PizzaCard from "./PizzaCard";

export default function Pizzas({ pizzas }) {

  return (
    <Grid
      w="full"
      h="full"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={8}
    >
      {pizzas?.map((pizza, i) => {
        return (
          <GridItem key={i}>
            <PizzaCard {...pizza} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
