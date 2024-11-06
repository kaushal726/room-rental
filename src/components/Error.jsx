import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

export const ErrorPage = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      bg="red.500"
      color="white"
      p={4}
      zIndex="1000"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        bg="yellow.400"
        height="150px"
        width="150px"
        mb={6}
      >
        <Heading size="2xl">!</Heading>
      </Box>
      <Heading size="2xl" mb={2}>
        Oops! Something Went Wrong
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="center">
        We encountered an error while processing your request. Please try again
        later.
      </Text>
      <Button
        size="lg"
        colorScheme="yellow"
        variant="solid"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </Button>
    </Flex>
  );
};
