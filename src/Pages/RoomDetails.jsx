import {
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useData } from "../Hooks/useData";
import { Loading } from "../components/Loading";
import { ErrorPage } from "../components/Error";
import {
  FaBed,
  FaBath,
  FaUtensils,
  FaHome,
  FaPhone,
  FaDollarSign,
  FaArrowLeft,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

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
      bgGradient="linear(to-br, purple.600, blue.800)"
      color="white"
      minH="100vh"
      p={4}
    >
      {/* Page Header with Back Button */}
      <Flex direction="column" align="center" mb={6} p={4}>
        <Button
          w={"100%"}
          onClick={() => navigate("/")}
          fontSize="lg"
          mb={4}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <FaArrowLeft />
        </Button>

        {/* Centered Room Title Below Button */}
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          bgGradient="linear(to-r, pink.300, purple.500)"
          bgClip="text"
          color="teal.400"
        >
          {room.title}
        </Heading>
      </Flex>

      {/* Room Detail Container */}
      <Box
        maxW="800px"
        mx="auto"
        boxShadow="xl"
        p={6}
        borderRadius="lg"
        bg="whiteAlpha.200"
      >
        {/* Image Slider */}
        <Slider {...settings}>
          {room.images.map((img, index) => (
            <Box key={index} p={2}>
              <img
                src={img}
                alt={`${room.title} ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Box>
          ))}
        </Slider>

        {/* Room Details with Icons */}
        <Stack spacing={4} mt={6} color="gray.200" fontSize="lg">
          <Flex align="center">
            <FaHome size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Room Number:</strong> {room.id}
            </Text>
          </Flex>
          <Flex align="center">
            <FaBed size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Bedrooms:</strong> {room.numbersOfBedRooms}
            </Text>
          </Flex>
          <Flex align="center">
            <FaBath size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Washrooms:</strong> {room.numbersOfWashroom}
            </Text>
          </Flex>
          <Flex align="center">
            <FaUtensils size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Kitchens:</strong> {room.numbersOfKitchen}
            </Text>
          </Flex>
          <Flex align="center">
            <FaDollarSign size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Rent:</strong> ₹ {room.rent} per month
            </Text>
          </Flex>
          <Flex align="center">
            <FaPhone size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Contact:</strong> {room.contact}
            </Text>
          </Flex>
          <Flex align="center">
            <IoLocation size={"16px"} style={{ marginRight: "8px" }} />
            <Text fontSize={"16px"}>
              <strong>Location:</strong> {room.address}
            </Text>
          </Flex>
          <Text mt={2} fontSize={"16px"}>
            <strong>Description:</strong> {room.description}
          </Text>

          {/* Availability Badge */}
          <Flex justify="center" mt={4}>
            <Badge
              background={room.isAvaliable ? "green.400" : "red.400"}
              p={2}
              borderRadius="md"
              fontSize="md"
            >
              {room.isAvaliable ? "Available" : "Not Available"}
            </Badge>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default RoomDetail;
