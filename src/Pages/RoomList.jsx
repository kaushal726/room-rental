import { Flex, Box, SimpleGrid, Text } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import React from "react";
import { useData } from "../Hooks/useData";
import { Loading } from "../components/Loading";
import { ErrorPage } from "../components/Error";
const RoomList = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <Box p={4} maxW="1200px" mx="auto">
      {data && data.length > 0 ? (
        <SimpleGrid m={6} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
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
