import {
  Container, HStack, Icon,
  Link, Text, VStack
} from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      path: "https://www.facebook.com/AlannMartinezzz",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      path: "https://www.instagram.com/alannmartinezz",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      path: "https://twitter.com/AlannMartinezz_",
      color: "Twitter",
    },
  ];

  return (
    <Container maxW="container.xl" as="footer" paddingTop={12}>
      <VStack spacing={8}>
        <HStack
          w="full"
          justify="space-between"
          fontWeight="semibold"
          paddingY={8}
        >
          <VStack align="start" spacing={0}>
            <Text fontSize="3xl" fontWeight="semibold" marginBottom="22">
              Address:
            </Text>
            <VStack align="start" fontWeight="normal">
              <Text fontSize="xl">Alvear 154</Text>
              <Text fontSize="xl">Bahia Blanca, Buenos Aires</Text>
            </VStack>
          </VStack>
          <VStack align="start" spacing={0}>
            <Text fontSize="3xl" fontWeight="semibold" marginBottom="22">
              Contact us:
            </Text>
            <VStack align="start" fontWeight="normal" color="blackAlpha.800">
              <Text fontSize="xl">+54 291-4467013</Text>
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
          <VStack spacing={0} margin={0}>
            <Text
              alignSelf="start"
              fontSize="3xl"
              fontWeight="semibold"
              marginBottom="22"
            >
              Follow us on:
            </Text>
            <HStack spacing={6} justify="start" padding={0} margin={0}>
              {socialLinks.map(({ name, path, icon, color }) => (
                <Link href={path} key={name} target="_blank">
                  <Icon
                    as={icon}
                    boxSize="9"
                    color={color || "facebook"}
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </HStack>
        <VStack borderTop='1px solid #aeaeae' w='full' spacing={2} lineHeight="short" paddingY={8}>
          <Text>© 2023 Pizza App</Text>
          <Text>All rights reserved</Text>
        </VStack>
      </VStack>
    </Container>
  );
}
