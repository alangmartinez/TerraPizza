import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Icon,
} from "@chakra-ui/react";
import background from "../../assets/images/background.jpg";
import Header from "../../components/Header";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

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
