import { useEffect, useState } from "react";

const apis = [
  "https://script.googleusercontent.com/macros/echo?user_content_key=ao0y0u0jU04kio8vpr3zQXqRly8zqsp5GovwYGK8QCw5ESwiSOJ_U02Vjlh7_BYnH6dp1qt2XQ3PR__uJ_lZXZyoj2ojsCLRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIg_-E5sxcavfXbJYaTPAaKH7v6exCM7P3AZ-oj9AjbaH1U4W5v1Qp_xutQxok_KoibKFoDe72sDMGHPP9uX6b77fD99u4rZBdz9Jw9Md8uu&lib=MCNz0lUXvcw0lFI7XJfbk6DI5dfaA14hn",
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
  "address",
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
