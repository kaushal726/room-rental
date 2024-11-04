// RoomDetail.js
import { Box, Text, Heading, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import roomData from "./data.json";

const RoomDetail = () => {
  const { id } = useParams();
  const room = roomData.find((room) => room.id === parseInt(id));

  if (!room) return <Text>Room not found</Text>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box maxW="3xl" mx="auto" p={4}>
      <Heading mb={4}>{room.title}</Heading>
      <Slider {...settings}>
        {room.images.map((img, index) => (
          <Box key={index} p={2}>
            <img src={img} alt={`${room.title} ${index + 1}`} style={{ width: "100%", borderRadius: "8px" }} />
          </Box>
        ))}
      </Slider>
      <Stack mt={4} spacing={3}>
        <Text>{room.description}</Text>
      </Stack>
    </Box>
  );
};

export default RoomDetail;
