import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomList from "./Pages/RoomList";
import RoomDetail from "./Pages/RoomDetails";
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
