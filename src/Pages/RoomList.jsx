import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import rooms from "../Data/data.json";
import React, { useEffect, useState } from "react";
import { useData } from "../Hooks/useData";
const RoomList = () => {
  const { data, loading, error } = useData();
  console.log(data);

  return (
    <Box p={4} maxW="1200px" mx="auto">
      {rooms.length !== 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {data.map((room) => (
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
