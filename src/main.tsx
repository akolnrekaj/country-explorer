import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Layout from "./layouts/Layout.tsx";
import CountryList from "./components/CountryList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CountryList />} />
            <Route path="/countryList" element={<CountryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
