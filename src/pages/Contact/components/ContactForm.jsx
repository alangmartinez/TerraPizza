import React from "react";
import useFormValidation from "../../../hooks/useFormValidation";
import { Form, Formik } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  VStack,
  FormHelperText,
} from "@chakra-ui/react";
import { RiMailSendLine } from "react-icons/ri";

function ContactForm({ variant }) {
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
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <Form onSubmit={() => handleSubmit()}>
              <VStack spacing={8}>
                <FormControl isRequired isInvalid={errors.name && touched.name}>
                  <FormLabel fontSize="lg" htmlFor="name">
                    Name:
                  </FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    variant={variant}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor="blackAlpha.500"
                  />
                  {errors.name && touched.name ? (
                    <FormErrorMessage fontSize="lg" htmlFor="name">
                      {errors.name}
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your name here.</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={errors.surname && touched.surname}
                >
                  <FormLabel fontSize="lg" htmlFor="surname">
                    Surname:
                  </FormLabel>
                  <Input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    variant={variant}
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor="blackAlpha.500"
                  />
                  {errors.surname && touched.surname ? (
                    <FormErrorMessage fontSize="lg" htmlFor="surname">
                      {errors.surname}
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your surname here.</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={errors.email && touched.email}
                >
                  <FormLabel fontSize="lg" htmlFor="email">
                    Email:
                  </FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    variant={variant}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor="blackAlpha.500"
                  />
                  {errors.email && touched.email ? (
                    <FormErrorMessage fontSize="lg" htmlFor="email">
                      {errors.email}
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter your email here.</FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={errors.message && touched.message}
                >
                  <FormLabel fontSize="lg" htmlFor="message">
                    Message:
                  </FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Type your message here..."
                    variant="unstyled"
                    rows={5}
                    resize="none"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    borderColor="blackAlpha.500"
                  />
                  {errors.message && touched.message && (
                    <FormErrorMessage fontSize="lg" htmlFor="message">
                      {errors.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="green"
                  variant="solid"
                  size="lg"
                  boxShadow="lg"
                  rightIcon={<RiMailSendLine />}
                >
                  Submit
                </Button>
              </VStack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default ContactForm;
