import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import useFormValidation from "../hooks/useFormValidation";
import { RiMailSendLine } from "react-icons/ri";

export default function HelpForm({ variant }) {
  return (
    <Box
      w="full"
      maxW="2xl"
      p={20}
      paddingX={20}
      bgColor="whiteAlpha.700"
      backdropFilter="auto"
      backdropBlur="lg"
      borderRadius="lg"
      boxShadow="dark-lg"
      color="blackAlpha.800"
    >
      <Formik
        initialValues={{ name: "", surname: "", email: "", message: "" }}
        validate={(values) => {
          useFormValidation({ values });
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={() => handleSubmit()}>
            <VStack spacing={8}>
              <FormControl isRequired isInvalid={errors.name && touched.name}>
                <FormLabel fontSize='lg' htmlFor="name">Name:</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={variant}
                  borderColor="blackAlpha.500"
                />
                {errors.name && touched.name ? (
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                ) : (
                  <FormHelperText>Enter your name here.</FormHelperText>
                )}
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.surname && touched.surname}
              >
                <FormLabel fontSize='lg' htmlFor="surname">Surname:</FormLabel>
                <Input
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={variant}
                  borderColor="blackAlpha.500"
                />
                {errors.surname && touched.surname ? (
                  <FormErrorMessage>{errors.surname}</FormErrorMessage>
                ) : (
                  <FormHelperText>Enter your surname here.</FormHelperText>
                )}
              </FormControl>
              <FormControl isRequired isInvalid={errors.email && touched.email}>
                <FormLabel fontSize='lg' htmlFor="email">Email:</FormLabel>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={variant}
                  borderColor="blackAlpha.500"
                />
                {errors.email && touched.email ? (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                ) : (
                  <FormHelperText>example@gmail.com</FormHelperText>
                )}
              </FormControl>
              <FormControl
                isRequired
                isInvalid={errors.message && touched.message}
              >
                <FormLabel fontSize='lg' htmlFor="message">Message:</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="unstyled"
                  resize="none"
                  rows={5}
                />
                {errors.message && touched.message && (
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                alignSelf="center"
                type="submit"
                size="lg"
                colorScheme="green"
                boxShadow="lg"
                rightIcon={<RiMailSendLine/>}
              >
                Submit!
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
