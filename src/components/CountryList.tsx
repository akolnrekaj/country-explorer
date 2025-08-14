import { Box, SimpleGrid } from "@chakra-ui/react";

const CountryList = () => {
  const items = [
    "Later I will transform this items to Chakra UI",
    "Mock State1",
    "Mock State2",
    "Mock State3",
    "Mock State4",
    "Mock State1",
  ];
  return (
    <SimpleGrid columns={[2, null, 3]} gap="6">
      {items.map((item, index) => (
        <Box
          key={index}
          p={4}
          bg="blue.50"
          borderRadius="md"
          shadow="md"
          textAlign="center"
        >
          {item}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CountryList;
