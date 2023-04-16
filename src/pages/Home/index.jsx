import {
  Box,
  Button,
  Container,
  Heading,
  VStack
} from "@chakra-ui/react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import background from "../../assets/images/background.jpg";

export default function index() {




  return (
    <Box
      align="start"
      h="100vh"
      bgImage={background}
      backgroundSize="cover"
      id="/"
      backgroundAttachment='fixed'
    >
      <Container maxW="container.xl" h="full">
        <VStack
          justify="center"
          spacing={10}
          align="start"
          h='1000px'
          m='auto'
          
        >
          <Heading
            as="h1"
            textShadow="dark-lg"
            letterSpacing="wide"
            fontSize={{base: "7xl", xl: '8xl'}}
            _after={{ content: "' Terra Pizza!'", color: "green.600" }}
          >
            Welcome to
            <br />
          </Heading>
          <Button
            as={Link}
            to="menu"
            smooth={true}
            spy={true}
            duration={1000}
            cursor="pointer"
            variant="solid"
            colorScheme="green"
            boxShadow="dark-lg"
            p={{ base: 6}}
            size="lg"
            leftIcon={<RiShoppingCart2Line />}
            justifySelf="end"
          >
            Make your order!
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
