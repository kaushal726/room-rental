import { Box, Image, Text, Stack, Heading } from "@chakra-ui/react";

const RoomCard = ({ room }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    p={4}
    _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
  >
    <Image src={room.images[0]} alt={room.title} borderRadius="md" />
    <Stack mt={4} spacing={3}>
      <Heading size="md">{room.title}</Heading>
      <Text>{room.description}</Text>
    </Stack>
  </Box>
);

export default RoomCard;
