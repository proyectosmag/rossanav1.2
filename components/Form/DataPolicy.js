import {
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  Select,
  Checkbox,
  Text
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../lib/apiotros";

const initValues = {
  name: "",
  phone: "",
  direction: "",
  email: "",
  quality: "",
};

const initState = { isLoading: false, error: "", values: initValues };

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default function DataPolicyForm() {
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
      <Container>
        
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Es requerido</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.phone && !values.phone}
          mb={5}
        >
          <FormLabel>Telefono</FormLabel>
          <Input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Es requerido</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.direction && !values.direction}
          mb={5}
        >
          <FormLabel>Dirección</FormLabel>
          <Input
            type="text"
            name="direction"
            value={values.direction}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Es requerido</FormErrorMessage>
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
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Es requerido</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.quality && !values.quality}
          mb={5}
        >
          <FormLabel>En calidad de</FormLabel>
          {/* <Input
            type="text"
            name="quality"
            value={values.quality}
            onChange={handleChange}
            onBlur={onBlur}
          /> */}
          <Select
            placeholder="Selecciona una opción"
            type="text"
            name="quality"
            isRequired
            value={values.quality}
            onChange={handleChange}
            onBlur={onBlur}
          >
            <option value="Propietario">Propietario</option>
            <option value="Apoderado">Apoderado</option>
            <option value="Familiar del propietario">
              Familiar del propietario
            </option>
          </Select>

          <FormErrorMessage>Es requerido</FormErrorMessage>
        </FormControl>

        <Checkbox colorScheme="green">
          Acepto los terminos y condiciones
        </Checkbox>

        <br />
        <br />
        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          disabled={
            !values.name ||
            !values.phone ||
            !values.direction ||
            !values.email ||
            !values.quality
          }
          onClick={onSubmit}
        >
          Enviar
        </Button>
      </Container>{" "}
    </ChakraProvider>
  );
}
