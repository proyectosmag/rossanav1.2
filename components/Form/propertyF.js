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
import { sendContactForm } from "../../lib/apiProperty";

const initValues = { name: "", email: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function FormProperty() {
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
    <ChakraProvider theme={theme}>
      <Container maxW="450px">
        <br />
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Tu nombre</FormLabel>
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
          <FormLabel>Correo electronico</FormLabel>
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
          Acepto recibir información sobre ofertas inmobiliarias
        </Checkbox>
        <br />
        <br />
        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          disabled={!values.name || !values.email || !values.message}
          onClick={onSubmit}
        >
          Enviar mensaje
        </Button>
      </Container>
    </ChakraProvider>
  );
}
