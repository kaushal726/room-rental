import { Box, Text, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useData } from "../Hooks/useData";
import { Loading } from "../components/Loading";
import { ErrorPage } from "../components/Error";

const RoomDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useData();
  const room = data.find((room) => room.id == parseInt(id));
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      bgGradient="linear(to-b, blue.700, black)"
      color="white"
      minH="100vh"
      p={4}
    >
      <Button
        onClick={() => navigate("/")}
        mb={4}
        colorScheme="blue"
        variant="outline"
      >
        Back
      </Button>
      <Box maxW="800px" mx="auto">
        <Heading mb={4} textAlign="center">
          {room.title}
        </Heading>

        <Slider {...settings}>
          {room.images.map((img, index) => (
            <Box key={index} p={2}>
              <img
                src={img}
                alt={`${room.title} ${index + 1}`}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
          ))}
        </Slider>

        <Stack spacing={4} mt={6}>
          <Text fontSize="lg">
            <strong>Room Number:</strong> {room.roomNumber}
          </Text>
          <Text fontSize="lg">
            <strong>Balcony:</strong> {room.balcony}
          </Text>
          <Text fontSize="lg">
            <strong>Rent:</strong> {room.rent}
          </Text>
          <Text fontSize="lg">
            <strong>Contact Info:</strong> {room.contact}
          </Text>
          <Text mt={4}>{room.description}</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default RoomDetail;
