import { Box, Stack, Text } from "@chakra-ui/react";
import HelpForm from "../../components/HelpForm";
import background from "../../assets/images/bgContact.jpg";

export default function index() {
  return (
    <Stack
    direction={{ base: "column", xl: "row" }}
    align='center'
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      h={{base: 'auto', xl: '100vh'}}
      justify="space-around"
      paddingY={20}
      id='contact'
    >
      <Box lineHeight="90px">
        <Text as="h1" fontSize={{base: '2xl', lg: "8xl"}} color="whiteAlpha.900" fontWeight="bold">
          Contact us!
        </Text>
        <Text as="h2" fontSize={{base: 'lg', lg: "3xl"}} color="whiteAlpha.900" fontWeight="light">
          We are here to help you!
        </Text>
      </Box>
      <HelpForm variant='flushed' />
    </Stack>
  );
}
