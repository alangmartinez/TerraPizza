import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Link as ExternalLink,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
    <Container
      maxW={{ base: "full", xl: "container.xl" }}
      as="footer"
      paddingTop={12}
    >
      <VStack spacing={8}>
        <Stack
          direction={{ base: "column", xl: "row" }}
          justify={{ base: "center", xl: "space-between" }}
          alignItems={{ base: "center", xl: "start" }}
          paddingY={8}
          spacing={{ base: 20, md: 8 }}
          w="full"
        >
          <VStack align={{ base: "center", xl: "start" }} spacing={7}>
            <Heading fontSize="4xl" letterSpacing={1}>
              Contact us
            </Heading>
            <VStack
              align={{ base: "center", xl: "start" }}
              fontWeight="normal"
              fontSize="xl"
              color="blackAlpha.800"
              spacing={3}
            >
              <HStack spacing={3}>
                <PhoneIcon />
                <Text>+54 - 2914467013</Text>
              </HStack>
              <HStack spacing={3}>
                <EmailIcon />
                <Link
                  href="mailto:alannmartinezz@icloud.com"
                  _hover={{ textDecoration: "none" }}
                  >alannmartinezz@icloud.com
                </Link>
              </HStack>
                  <Text>Casanova 1230, Bahia Blanca.</Text>
            </VStack>
          </VStack>
          <VStack align="start" spacing={0} margin={0}>
            <Heading
              alignSelf="start"
              fontSize="4xl"
              letterSpacing={1}
              marginBottom="16px"
            >
              Follow us on
            </Heading>
            <VStack
              spacing={3}
              align={{ base: "center", xl: "start" }}
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
                  size='md'
                  leftIcon={icon ? icon : null}
                  rightIcon={<ExternalLinkIcon />}
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
