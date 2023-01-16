import {
  Box,
  HStack,
  Grid,
  GridItem,
  VStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Card from "../../components/Card";
import background from "../../assets/images/bgMenu.jpg";
import pizzas from "../../../pizzas.json";
import menuBackground from "../../assets/images/menuBackground.jpg";

export default function index() {
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
      >
        <Heading fontSize="6xl" letterSpacing="wider" fontWeight="bold">
          MENU
        </Heading>
        <Grid
          w="full"
          h="full"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(4, 1fr)"
          gap={8}
        >
          {pizzas.map((pizza, i) => {
            <GridItem key={i} colStart={1 + i} colEnd={2 + i}>
              <Card {...pizza} />
            </GridItem>;
          })}
        </Grid>
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
