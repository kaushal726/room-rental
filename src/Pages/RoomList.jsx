import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import rooms from "../Data/data.json";
import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
//https://sheetdb.io/api/v1/rvubes8k1601j
const RoomList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: "1r98Eh1al8V65lSw7sy6bVtaYm5hodFYGv7zrRZB4NpI",
      simpleSheet: true,
    })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error("Error fetching Google Sheets data:", err));
  }, []);

  https: return (
    <Box p={4} maxW="1200px" mx="auto">
      {rooms.length !== 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          <Text color="white">No Rooms avaliable Now</Text>
        </Box>
      )}
    </Box>
  );
};

export default RoomList;
