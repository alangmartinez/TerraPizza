import { Box, Grid, Heading, Stack, VStack, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import background from "../../assets/images/bgMenu.jpg";
import menuBackground from "../../assets/images/menuBackground.jpg";
import usePizzas from "../../hooks/usePizzas";
import Pizzas from '../../components/Pizzas';

export default function index() {
  const { pizzas, getPizzas } = usePizzas();

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      h="100vh"
      w="full"
      id="menu"
      spacing={0}
      p={0}
    >
      <VStack
        w="full"
        h="full"
        flex={1}
        order={2}
        paddingY={36}
        p={12}
        paddingX={16}
        bgImage={menuBackground}
        backgroundSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        spacing={12}
      >
        <Heading fontSize="6xl" letterSpacing="wider" fontWeight="bold">
          MENU
        </Heading>
        <Pizzas pizzas={pizzas}/>
      </VStack>
      <Box
        boxShadow="dark-lg"
        order={1}
        flex={0.7}
        w="full"
        h="full"
        bgImage={background}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="bottom"
      ></Box>
    </Stack>
  );
}
