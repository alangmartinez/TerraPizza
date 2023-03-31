import { Select, Heading, VStack, HStack, Icon, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import menuBackground from "../../assets/images/menuBackground.jpg";
import usePizzas from "../../hooks/usePizzas";
import Pizzas from "./components/Pizzas";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function index() {
  const { pizzas, getPizzas } = usePizzas();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams)

  useEffect(() => {
    getPizzas();
  }, []);


  return (
    <VStack
      w="full"
      paddingY={36}
      paddingX={16}
      bgImage={menuBackground}
      backgroundSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      spacing={12}
      id="menu"
    >
      <Heading fontSize="6xl" letterSpacing="wider" fontWeight="bold">
        MENU
      </Heading>
      <HStack justify='space-between' w='full'>
        <HStack background='trasparent' px={4} py={2} borderRadius='md'>
          <Icon as={FaSearch} boxSize='6' cursor='pointer' />
          <Input placeholder="Find pizza" variant='flushed' _placeholder={{ color: '#666'}}/>
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
  );
}
