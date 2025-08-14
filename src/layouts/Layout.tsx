import { Outlet } from "react-router";
import { Box, HStack, VStack, Text, Link } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

const Layout = () => {
  return (
    <VStack minH="100vh" justify="space-between" align="stretch">
      <HStack gap={4} align="center" p={4} bg="gray.100">
        <RouterNavLink
          to="/"
          style={{
            fontWeight: "bold",
            color: "#3182ce",
            textDecoration: "none",
          }}
        >
          Country List
        </RouterNavLink>
        <RouterNavLink
          to="/footer"
          style={{
            fontWeight: "bold",
            color: "#3182ce",
            textDecoration: "none",
          }}
        >
          Kontakt
        </RouterNavLink>
      </HStack>

      <Box flex="1" p={4}>
        <Outlet />
      </Box>

      {/*footer */}
      <Box bg="gray.200" p={4}>
        <VStack gap={2}>
          <Text fontWeight="bold">Contact us</Text>
          <Text>Email: info@countryexplorer.com</Text>
          <Text>Phone: +385 123 456</Text>
          <HStack gap={4}>
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
    </VStack>
  );
};

export default Layout;
