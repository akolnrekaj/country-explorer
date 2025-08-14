import { Outlet } from "react-router";
import { VStack } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

const Layout = () => {
  return (
    <VStack gap={4} align="start" p={4}>
      <RouterNavLink
        to="/"
        style={{
          fontWeight: "bold",
          color: "#3182ce",
          textDecoration: "none",
        }}
      >
        Country List{" "}
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

      <Outlet />
    </VStack>
  );
};

export default Layout;
