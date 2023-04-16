import {
  Box,
  Button,
  Container,
  Image,
  HStack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import pizza from "../../assets/images/favicon.png";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "menu",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];

  const handleScroll = () => {
    const scroll = window.scrollY;
    const headerHeight = document.getElementById("header").offsetHeight;

    scroll > headerHeight
      ? setBackgroundColor("blackAlpha.700")
      : setBackgroundColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <Box
      w="full"
      top={0}
      paddingY={3}
      id="header"
      as="header"
      position="fixed"
      zIndex="sticky"
      bgColor={backgroundColor}
      transition="background-color 500ms ease"
      backdropFilter={backgroundColor === "transparent" ? "none" : "blur(5px)"}
    >
      <Container maxW="container.xl" id="header">
        <HStack maxW="container.xl" justify="space-between">
          <Link to="/" smooth={true} cursor="pointer">
            <HStack spacing={3}>
              <Image src={pizza} alt="Logo" w="50" h="50" />
              <Heading color="brand.primary" letterSpacing={1} fontSize='3xl' textShadow='dark-lg'>
                Terra Pizza
              </Heading>
            </HStack>
          </Link>
          <HStack
            spacing="4.5rem"
            as="nav"
            display={{ base: "none", lg: "flex" }}
            fontFamily="title"
          >
            {pages.map(({ name, path }) => (
              <Button variant="unstyled" fontSize='lg' key={name} color={backgroundColor === 'transparent' ? '' : 'whiteAlpha.900'}>
                <Link to={path} duration={1250} smooth={true} spy={true} >
                  {name}
                </Link>
              </Button>
            ))}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
