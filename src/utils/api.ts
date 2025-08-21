import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

// axios instanca (dobro je imati, kasnije možeš dodati interceptore, header-e itd.)
const api = axios.create({
  baseURL: BASE_URL,
});

// dohvaćanje svih država
export const fetchCountries = async () => {
  const response = await api.get("/all?fields=name,flags,region,cca3");
  return response.data;
};

// dohvaćanje detalja za jednu državu po code-u (npr. HR)
export const fetchCountryByCode = async (code: string) => {
  const response = await api.get(
    `/alpha/${code}?fields=name,flags,region,subregion,capital,population,currencies,languages,borders,cca3`
  );
  return response.data;
};
