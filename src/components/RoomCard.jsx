import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <Box
      bgGradient="linear(to-b, blue.700, black)"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      onClick={() => navigate(`/room/${room.id}`)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image src={room.images[0]} alt={room.title} borderRadius="md" />
      <Heading size="md" mt={4}>
        {room.title}
      </Heading>
      <Text mt={2} noOfLines={2}>
        {room.description}
      </Text>
    </Box>
  );
};

export default RoomCard;
