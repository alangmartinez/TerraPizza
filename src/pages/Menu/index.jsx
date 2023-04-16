import { Search2Icon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Input, Select, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import menuBackground from "../../assets/images/menuBackground.jpg";
import usePizzas from "../../hooks/usePizzas";
import Pizzas from "./components/Pizzas";

export default function index() {
  const { pizzas, getPizzas } = usePizzas();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <Box
      bgImage={menuBackground}
      backgroundSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack
        maxW="container.xl"
        m="auto"
        paddingY={36}
        paddingX={16}
        spacing={12}
        id="menu"
      >
        <Heading fontSize="6xl" letterSpacing="wider" fontWeight="bold">
          MENU
        </Heading>
        <HStack justify="space-between" w="full">
          <HStack background="trasparent" px={4} py={2} borderRadius="md">
            <Search2Icon />
            <Input
              placeholder="Find pizza"
              variant="flushed"
              _placeholder={{ color: "#666", paddingLeft: '3px' }}
            />
          </HStack>
          <Select
            w="sm"
            alignSelf="start"
            variant="filled"
            fontWeight="medium"
            fontSize={18}
            placeholder="Sort by"
          >
            <option value="from highest to lowest price">
              From highest to lowest price
            </option>
            <option value="vegetarian">Vegetarian</option>
            <option value="meat">Meat</option>
          </Select>
        </HStack>
        <Pizzas pizzas={pizzas} />
      </VStack>
    </Box>
  );
}
