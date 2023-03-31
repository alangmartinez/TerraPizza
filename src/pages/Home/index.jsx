import {
  Box,
  Button,
  Container,
  Heading, Icon, VStack
} from "@chakra-ui/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-scroll";
import background from "../../assets/images/background.jpg";
import Header from "../../components/layout/Header";

export default function index() {




  return (
    <Box
      align="start"
      justify="space-between"
      h="100vh"
      bgImage={background}
      backgroundSize="cover"
      id="/"
      position="relative"
      backgroundAttachment='fixed'
    >
      <Header />
      <Container maxW="container.xl" h="full">
        <VStack
          justify="center"
          spacing={10}
          align="start"
          h="full"
          paddingBottom="46rem"
        >
          <Heading
            as="h1"
            textShadow="dark-lg"
            letterSpacing="wide"
            fontSize="8xl"
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
            size="lg"
            leftIcon={<RiShoppingCart2Line />}
            justifySelf="end"
          >
            Make your order!
          </Button>
        </VStack>
      </Container>
      <Link to="menu" smooth={true} spy={true} duration={1000}>
        <Icon
          as={BsFillArrowDownCircleFill}
          boxSize={20}
          color="white"
          position="absolute"
          bottom={20}
          left="50%"
          cursor="pointer"
          transform="translateX(-50%)"
          zIndex="sticky"
        />
      </Link>
    </Box>
  );
}
