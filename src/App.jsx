import { ChakraProvider, Box, Heading, defaultConfig, defaultSystem } from "@chakra-ui/react";
import roomData from "./data.json";
import RoomList from "./components/RoomList";
import React from "react";
import { Routes,Router,Route } from "react-router-dom";
import RoomDetail from "./RoomDetails";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
     <Router>
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/room/:id" element={<RoomDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
