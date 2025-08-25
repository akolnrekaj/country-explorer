import {
  SimpleGrid,
  Image,
  Text,
  chakra,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCountries } from "../hooks/useCountries";

interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  region: string;
  capital?: string[];
  population?: number;
}

const ChakraLink = chakra(Link);

const CountryList = () => {
  const { data: countries, isLoading, isError, error } = useCountries();

  if (isLoading)
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading countries...</Text>
      </Box>
    );

  if (isError)
    return (
      <Text color="red.500" fontWeight="bold">
        {(error as Error).message}
      </Text>
    );

  return (
    <SimpleGrid minChildWidth="250px" gap="40px">
      {countries?.map((country: Country) => (
        <ChakraLink
          key={country.cca3}
          to={`/country/${country.cca3}`}
          p={4}
          bg="blue.50"
          borderRadius="md"
          textAlign="center"
          display="block"
          cursor="pointer"
          _hover={{
            transform: "scale(1.05)",
            transition: "0.2s",
            bg: "blue.100",
          }}
        >
          <Image
            src={country.flags.png}
            alt={country.name.common}
            boxSize="100px"
            mx="auto"
          />
          <Text fontWeight="bold" mt={2}>
            {country.name.common}
          </Text>
          <Text>{country.region}</Text>
        </ChakraLink>
      ))}
    </SimpleGrid>
  );
};

export default CountryList;
