import {
  Button,
  Container,
  Stack,
  Text,
  VStack,
  Link as ExternalLink,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Footer() {
  const menuLinks = [
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

  const socialLinks = [
    {
      label: "Facebook",
      icon: <FaFacebookF />,
      color: "facebook.500",
      href: "https://www.facebook.com/AlannMartinezzz",
    },
    {
      label: "Instagram",
      icon: <BsInstagram />,
      color: "purple.500",
      href: "https://www.instagram.com/alannmartinezz",
    },
    {
      label: "Twitter",
      icon: <AiOutlineTwitter />,
      color: "twitter.500",
      href: "https://twitter.com/AlannMartinezz_",
    },
  ];

  return (
    <Container maxW="container.xl" as="footer" paddingTop={12}>
      <VStack spacing={8}>
        <Stack
          w="full"
          direction={{ lg: "column", xl: "row" }}
          justify={{ lg: "center", xl: "space-between" }}
          alignItems={{ lg: "center", xl: "start" }}
          fontWeight="semibold"
          paddingY={8}
        >
          <VStack
            align={{ lg: "center", xl: "start" }}
            fontWeight="normal"
            spacing={0}
          >
            {menuLinks.map(({ name, path }) => (
              <Button
                key={name}
                variant="unstyled"
                fontSize="lg"
                fontFamily="body"
                fontWeight="normal"
              >
                <Link
                  fontFamily="body"
                  to={path}
                  smooth="true"
                  spy="true"
                  duration={1000}
                >
                  {name}
                </Link>
              </Button>
            ))}
          </VStack>
          <VStack align="start" spacing={0}>
            <Text
              fontSize="4xl"
              letterSpacing={1}
              fontFamily="heading"
              marginBottom="22"
            >
              Contact us
            </Text>
            <VStack align="start" fontWeight="normal" color="blackAlpha.800">
              <Text fontSize="xl">Casanova 1230, Bahia Blanca.</Text>
              <Text fontSize="xl">
                <Link
                  href="mailto:alannmartinezz@icloud.com"
                  _hover={{ textDecoration: "none" }}
                >
                  Email: alannmartinezz@icloud.com
                </Link>
              </Text>
            </VStack>
          </VStack>
          <VStack align="start" spacing={0} margin={0}>
            <Text
              alignSelf="start"
              fontSize="4xl"
              letterSpacing={1}
              fontFamily="heading"
              marginBottom="16px"
            >
              Follow us on
            </Text>
            <VStack
              spacing={3}
              align={{ lg: "center", xl: "start" }}
              padding={0}
              margin={0}
            >
              {socialLinks.map(({ label, href, icon, color }) => (
                <Button
                  key={label}
                  as={ExternalLink}
                  href={href}
                  target="_blank"
                  variant="ghost"
                  fontFamily="body"
                  fontWeight="medium"
                  color={color}
                  leftIcon={icon ? icon : null}
                  rightIcon={<FiArrowUpRight />}
                >
                  {label}
                </Button>
              ))}
            </VStack>
          </VStack>
        </Stack>
        <VStack
          borderTop="1px solid #aeaeae"
          w="full"
          spacing={2}
          lineHeight="short"
          paddingY={8}
        >
          <Text>© 2023 Pizza App</Text>
          <Text>All rights reserved</Text>
        </VStack>
      </VStack>
    </Container>
  );
}
