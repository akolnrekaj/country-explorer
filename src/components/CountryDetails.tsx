import { useParams } from "react-router-dom";
import { Box, Image, Text, VStack, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
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
  subregion: string;
  population: number;
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
}

const CountryDetails = () => {
  const { code } = useParams();

  const { data, isLoading, isError, error } = useQuery<Country>({
    queryKey: ["country", code],
    queryFn: () => fetchCountryByCode(code!),
    enabled: !!code,
  });

  if (isLoading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading country details...</Text>
      </Box>
    );
  }

  if (isError) {
    return (
      <Text color="red.500" textAlign="center">
        {(error as Error).message}
      </Text>
    );
  }

  if (!data) {
    return <Text textAlign="center">Country not found</Text>;
  }

  return (
    <VStack gap={4}>
      <Image src={data.flags.png} alt={data.name.common} boxSize="200px" />
      <Text fontSize="2xl" fontWeight="bold">
        {data.name.common}
      </Text>
      <Text>Official Name: {data.name.official}</Text>
      <Text>Capital: {data.capital?.[0]}</Text>
      <Text>Region: {data.region}</Text>
      <Text>Subregion: {data.subregion}</Text>
      <Text>Population: {data.population.toLocaleString()}</Text>
      <Text>
        Currencies:{" "}
        {Object.values(data.currencies)
          .map((c) => c.name)
          .join(", ")}
      </Text>
      <Text>Languages: {Object.values(data.languages).join(", ")}</Text>
    </VStack>
  );
};

export default CountryDetails;
