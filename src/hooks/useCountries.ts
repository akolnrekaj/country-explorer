import { useEffect, useState } from "react";
import { fetchCountries } from "../utils/api";

export const useCountries = () => {
  const [countries, setCountries] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error while fetching data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { countries, loading, error };
};
