import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Layout from "./layouts/Layout.tsx";
import CountryList from "./components/CountryList.tsx";
import CountryDetails from "./components/CountryDetails.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactPage from "./components/ContactPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CountryList />} />
              <Route path="/countryList" element={<CountryList />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/country/:code" element={<CountryDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
