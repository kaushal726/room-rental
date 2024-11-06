import { useEffect, useState } from "react";

const apis = [
  "https://script.googleusercontent.com/macros/echo?user_content_key=32oRqb99HElUr1aJtWieiw7_EghOPf-aSueANhB9j1ypPTbAt8SzN07Ugs70PB7MzajeRQKrv0yR4Ox1AzaUUENllPtgE7Iom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC23Bkc8q1DDVERLKr10RyP4A4m7PbP6cDCLgJDMNHxs3qvnST_TNfHaagkyso07U3YKfOLVHCHBZ7YO_P5Rn5FZ_4LxbXdzZw&lib=MCNz0lUXvcw0lFI7XJfbk6DI5dfaA14hn",
  "https://sheetdb.io/api/v1/jtid76w34k00l",
];

const validRows = [
  "id",
  "title",
  "description",
  "contact",
  "rent",
  "numbersOfBedRooms",
  "numbersOfWashroom",
  "numbersOfKitchen",
  "balcony",
  "images",
  "isAvaliable",
];

export const useData = () => {
  const [data, _setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiIndex = 0;
        let result;

        while (apiIndex < apis.length) {
          const response = await fetch(apis[apiIndex]);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          result = await response.json();
          if (result?.data) {
            break;
          }

          apiIndex++;
        }

        if (result?.data) {
          const data = result.data;
          const keys = Object.keys(data[0]);
          const isValid = JSON.stringify(validRows) === JSON.stringify(keys);
          if (isValid) {
            const parsedData = data.map((item) => ({
              ...item,
              images: item.images
                ? item.images.split(",").map((tag) => tag.trim())
                : [],
            }));
            _setData(parsedData);
          } else {
            console.log("Keys do not match. Fetching data from JSON.");
            const jsonData = require("../Data/data.json");
            _setData(jsonData);
          }
        }
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
