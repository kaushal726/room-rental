import { SimpleGrid } from "@chakra-ui/react";
import RoomCard from "./RoomCard";

const RoomList = ({ rooms }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
    {rooms.map((room) => (
      <RoomCard key={room.id} room={room} />
    ))}
  </SimpleGrid>
);

export default RoomList;
