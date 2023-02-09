import { Box, Button, Container, Image, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import pizza from '../assets/images/favicon.png';
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
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

  return (
    <Box w="full" top={0} paddingY={10} as="header">
      <Container maxW="container.xl" id="header">
        <HStack maxW="container.xl" justify="space-between">
          <Link to="/" smooth={true} >
            <Image src={pizza} alt='Logo' w='90' h='90'/>
          </Link>
          <HStack spacing="4.5rem" as="nav" display={{ base: 'none', lg:'flex'}}>
            {pages.map((page) => (
              <Button
                variant="unstyled"
                colorScheme="twitter"
                key={page.name}
                size="lg"
                fontSize="20px"
              >
                <Link to={page.path} duration={1600} smooth={true} spy={true}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </HStack>
          <Icon flex={.5} children={<FiShoppingCart />} boxSize={10} cursor='pointer'></Icon>
        </HStack>
      </Container>
    </Box>
  );
}
