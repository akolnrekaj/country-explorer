import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
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
  capital?: string[];
  region: string;
  population: number;
}

const CountryList = () => {
  const { countries, loading, error } = useCountries();
  const navigate = useNavigate();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid minChildWidth="sm" gap="40px">
      {(countries as Country[]).map((country) => (
        <Box
          key={country.cca3}
          p={4}
          bg="blue.50"
          borderRadius="md"
          shadow="md"
          textAlign="center"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
          onClick={() => navigate(`/country/${country.cca3}`)}
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
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CountryList;
