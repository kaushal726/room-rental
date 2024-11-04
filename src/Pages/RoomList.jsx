import { Box, SimpleGrid } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import rooms from "../Data/data.json";

const RoomList = () => {
    return (
        <Box p={4} maxW="1200px" mx="auto">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default RoomList;
