import { VStack, Box, Input, Button, Text, Flex } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Index = () => {
  const messages = [
    { id: 1, text: "Hello there!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "This is a static message." },
  ];

  return (
    <Flex>
      <Sidebar />
      <Box p={5} flex="1">
        <VStack spacing={4} align="stretch">
          {messages.map((message) => (
            <Text bg="gray.100" p={3} borderRadius="md" key={message.id}>
              {message.text}
            </Text>
          ))}
        </VStack>
        <Box mt={4} display="flex">
          <Input placeholder="Type a message..." />
          <Button leftIcon={<FaPaperPlane />} ml={2} colorScheme="blue">
            Send
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
