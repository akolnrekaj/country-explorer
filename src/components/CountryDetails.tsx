import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Image, Text, VStack, Spinner } from "@chakra-ui/react";
import { fetchCountryByCode } from "../utils/api";

interface Country {
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

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (code) {
          const data = await fetchCountryByCode(code);
          setCountry(data[0]); // API vraća array
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [code]);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading country details...</Text>
      </Box>
    );
  }

  if (!country) {
    return <Text>Country not found</Text>;
  }

  return (
    <VStack gap={4}>
      <Image
        src={country.flags.png}
        alt={country.name.common}
        boxSize="200px"
      />
      <Text fontSize="2xl" fontWeight="bold">
        {country.name.common}
      </Text>
      <Text>Capital: {country.capital?.[0]}</Text>
      <Text>Region: {country.region}</Text>
      <Text>Population: {country.population.toLocaleString()}</Text>
    </VStack>
  );
};

export default CountryDetails;
