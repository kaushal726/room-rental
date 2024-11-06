import { Flex, Box, SimpleGrid, Text, Heading, Button } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import React from "react";
import { useData } from "../Hooks/useData";
import { Loading } from "../components/Loading";
import { ErrorPage } from "../components/Error";

const RoomList = () => {
  const { data, loading, error } = useData();

  return (
    <Box
      bg="gray.900"
      minH="100vh"
      color="white"
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex direction="column" align="center" textAlign="center" my={10} px={6}>
        <Heading
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          color="teal.400"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
        >
          Discover Your Perfect Room
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mt={10} color="gray.300">
          Browse through our curated list of beautiful rooms and find the ideal
          space for your needs.
        </Text>
      </Flex>
      {/* Room List Section */}
      <Box maxW="1200px" w="full" mt={10}>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorPage />
        ) : data && data.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={4}>
            {data.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                boxShadow="md"
                borderRadius="md"
              />
            ))}
          </SimpleGrid>
        ) : (
          <Box mt={6} textAlign="center">
            <Text color="purple.500" fontSize="xl">
              No Rooms available now
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RoomList;
