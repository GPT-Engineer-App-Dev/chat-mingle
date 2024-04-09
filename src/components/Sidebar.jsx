import { Box, VStack, Text, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w="200px" h="100vh" bg="gray.200" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Menu
        </Text>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
