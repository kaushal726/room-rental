import { useEffect, useState } from "react";


const validRows = ["id", "title", "description", "contact", "rent", "numberOfBedRooms", "numbersOfWashroom", "numbersOfKitchen", "balcony", "images", "isAvaliable"];
export const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/rvubes8k1601j");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        let keys = Object.keys(result[0]);
        const parsedData = result.map((item) => ({
          ...item,
          images: item.images
            ? item.images.split(",").map((tag) => tag.trim())
            : [],
          isAvaliable: item.isAvaliable == "TRUE" ? true : false,
        }));
        setData(parsedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
