import { useState } from "react";

interface URL_TYPE {
  URL: string;
}
const useFetchPhotos = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fetchPhotos = async ({ URL }: URL_TYPE) => {
    try {
      setLoading(true);
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setError("");
      setLoading(false);
      return data;
    } catch (error) {
      setError((error as Error)?.message);
      setLoading(false);
      return null;
    }
  };
  return { fetchPhotos, error, loading };
};
export { useFetchPhotos };
