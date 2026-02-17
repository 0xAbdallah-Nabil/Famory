import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.BASE_URL}${url}`
      );
      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData().then((res) => {
      if (res) setProducts(res);
    });
  }, []);

  return { isLoading, products };
}
// data/products.json