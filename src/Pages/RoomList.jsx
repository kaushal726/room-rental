import { Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import React from "react";
import { useData } from "../Hooks/useData";

const RoomList = () => {
  const { data, loading, error } = useData();

  return (
    <Box p={4} maxW="1200px" mx="auto">
      {loading ? (
        <Text color="white">Loading...</Text>
      ) : error ? (
        <Text color="red.500">Error loading rooms</Text>
      ) : data && data.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {data.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          <Text color="white">No Rooms available now</Text>
        </Box>
      )}
    </Box>
  );
};

export default RoomList;
