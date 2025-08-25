import { Box, VStack, Text, HStack, Link } from "@chakra-ui/react";

const ContactPage = () => (
  <Box p={8} textAlign="center">
    <VStack gap={2}>
      <Text fontWeight="bold" fontSize="xl">
        Contact us
      </Text>
      <Text>Email: info@countryexplorer.com</Text>
      <Text>Phone: +385 123 456</Text>
      <HStack gap={4} justify="center">
        <Link href="#" color="blue.500">
          Facebook
        </Link>
        <Link href="#" color="blue.500">
          Twitter
        </Link>
        <Link href="#" color="blue.500">
          Instagram
        </Link>
      </HStack>
    </VStack>
  </Box>
);

export default ContactPage;
