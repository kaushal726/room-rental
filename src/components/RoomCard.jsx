import { Box, Image, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaDollarSign, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  if (!room.isAvaliable) return;
  return (
    <Box
      background="linear-gradient(-32deg, rgb(98, 189, 125) 10%, rgb(0, 37, 46) 120%, rgb(255, 255, 255) 120%)"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      m={6}
      onClick={() => navigate(`/room/${room.id}`)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Image src={room.images[0]} alt={room.title} borderRadius="md" />
      <Flex direction="column" mt={4}>
        <Flex
          flexDir={"row"}
          justifyContent={"start"}
          alignItems="center"
          mb={2}
          color={"gray.200"}
        >
          <Flex justifyContent={"center"} alignItems="center" mr={1}>
            <FaHome />
          </Flex>
          <Heading alignItems={"center"} size="md" isTruncated>
            {room.title || "Room Title"}
          </Heading>
        </Flex>

        <Flex
          flexDir={"row"}
          justifyContent={"start"}
          alignItems="center"
          mb={2}
          color={"gray.200"}
        >
          <Flex justifyContent={"center"} alignItems="center" mr={1}>
            <BsFillInfoCircleFill />
          </Flex>
          <Text alignItems={"center"} noOfLines={2}>
            {room.description || "No description available."}
          </Text>
        </Flex>

        <Flex
          flexDir={"row"}
          justifyContent={"start"}
          alignItems="center"
          mb={2}
          color={"gray.200"}
        >
          <Flex justifyContent={"center"} alignItems="center" mr={1}>
            <FaDollarSign />
          </Flex>
          <Text alignItems={"center"}>
            Rent: {room.rent ? `${room.rent} per month` : "Not specified"}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RoomCard;
