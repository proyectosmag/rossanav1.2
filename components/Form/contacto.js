import {
  Button,
  ChakraProvider,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "", check: "" };

const initState = { isLoading: false, error: "", values: initValues };

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function Form() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleCheck = (e) => {
    console.log(event.target.checked);
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Su mensaje ha sido enviado con éxito",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div>
      {" "}
      <ChakraProvider theme={theme}>
        <Container>
          <Heading>CONTACTANOS</Heading>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Añada su nombre</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Añada su correo electronico</FormErrorMessage>
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Asunto</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Añada el asunto de la consulta</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Mensaje</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Añada su mensaje</FormErrorMessage>
          </FormControl>

          <Checkbox colorScheme="green">
            Acepto los terminos y condiciones
          </Checkbox>

          <br />
          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Enviar
          </Button>
        </Container>
      </ChakraProvider>
    </div>
  );
}
