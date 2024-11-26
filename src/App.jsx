import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomList from "./Pages/RoomList";
import RoomDetail from "./Pages/RoomDetails";
import ReactGA from "react-ga";
const id = "G-3M46NFBEVV";
const App = () => {
  ReactGA.initialize(id);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/room/:id" element={<RoomDetail />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
