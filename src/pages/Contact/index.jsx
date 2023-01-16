import { Box, HStack, Text } from "@chakra-ui/react";
import HelpForm from "../../components/HelpForm";
import background from "../../assets/images/bgContact.jpg";

export default function index() {
  return (
    <HStack
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      h="100vh"
      justify="space-around"
      paddingY={20}
      id='contact'
    >
      <Box lineHeight="90px">
        <Text as="h1" fontSize="8xl" color="whiteAlpha.900" fontWeight="bold">
          Contact us!
        </Text>
        <Text as="h2" fontSize="3xl" color="whiteAlpha.900" fontWeight="light">
          We are here to help you!
        </Text>
      </Box>
      <HelpForm variant='flushed' />
    </HStack>
  );
}
