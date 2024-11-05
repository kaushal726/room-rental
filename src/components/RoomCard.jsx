import { Box, Image, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaDollarSign, FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <Box
      background="linear-gradient(-32deg, rgb(98, 189, 125) 10%, rgb(0, 37, 46) 120%, rgb(255, 255, 255) 120%)"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      onClick={() => navigate(`/room/${room.id}`)}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      {/* Ensure room.images exists and is not empty */}
      {room.images && room.images[0] && (
        <Image src={room.images[0]} alt={room.title} borderRadius="md" />
      )}
      <Flex direction="column" mt={4}>
        <Flex align="center" mb={2}>
          <Icon as={FaHome} color="blue.300" mr={2} />
          <Heading size="md" isTruncated>
            {room.title || "Room Title"}
          </Heading>
        </Flex>

        <Flex align="center" color="gray.200" fontSize="sm" mb={2}>
          <Icon as={BsInfoCircleFill} color="blue.300" mr={2} />
          <Text noOfLines={2}>
            {room.description || "No description available."}
          </Text>
        </Flex>

        <Flex align="center" color="gray.200" fontSize="sm">
          <Icon as={FaDollarSign} color="blue.300" mr={2} />
          <Text>
            Rent: {room.rent ? `${room.rent} per month` : "Not specified"}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RoomCard;
