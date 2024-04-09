import { VStack, Box, Input, Button, Text, Flex, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello there!" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "This is a static message." },
  ]);
  const [isSending, setIsSending] = useState(false);

  const sendMessage = () => {
    setIsSending(true);
    setTimeout(() => setIsSending(false), 1000);
  };

  return (
    <Flex>
      <Sidebar />
      <Box p={5} flex="1">
        <VStack spacing={4} align="stretch">
          {messages.map((message, index) => (
            <Text bg="gray.100" p={3} borderRadius="md" key={index}>
              {message.text}
            </Text>
          ))}
          {isSending && (
            <Text bg="gray.100" p={3} borderRadius="md">
              Sending...
            </Text>
          )}
        </VStack>
        <Box mt={4} display="flex">
          <Input placeholder="Type a message..." />
          <Button leftIcon={<FaPaperPlane />} ml={2} colorScheme="blue" onClick={sendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
