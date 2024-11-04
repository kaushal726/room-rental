import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import roomData from "./data.json";
import RoomList from "./components/RoomList";

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading textAlign="center" mb={5}>Rooms for Rent</Heading>
        <RoomList rooms={roomData} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
