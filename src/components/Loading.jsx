import { Spinner, Box, Flex } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      zIndex="1000"
    >
      <Spinner color="purple.500" size="xl" />
    </Flex>
  );
};
