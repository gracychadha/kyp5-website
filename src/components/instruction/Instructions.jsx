import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Checkbox,
  Button,
  VStack,
  List,
  ListItem,
} from "@chakra-ui/react";

function Instructions() {
  const [accepted, setAccepted] = useState(false);

  const handleStart = () => {
    if (!accepted) return;

    // 👉 redirect to test page
    window.location.href = "/start-test";
  };

  return (
    <Box maxW="800px" mx="auto" py={10} px={6}>
      <Heading mb={4}>Test Instructions</Heading>

      <Text mb={6} color="gray.600">
        Please read the following instructions carefully before starting the test.
      </Text>

      {/* Instructions List */}
      <Box bg="gray.50" p={6} borderRadius="md" mb={6}>
        <List spacing={3}>
          <ListItem>• The test consists of multiple-choice questions.</ListItem>
          <ListItem>• Each question has only one correct answer.</ListItem>
          <ListItem>• Do not refresh or close the browser during the test.</ListItem>
          <ListItem>• The test is time-bound.</ListItem>
          <ListItem>• Once submitted, answers cannot be changed.</ListItem>
        </List>
      </Box>

      {/* Checkbox */}
      <VStack align="start" spacing={4}>
        <Checkbox
          isChecked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        >
          I have read and understood the instructions
        </Checkbox>

        {/* Button */}
        <Button
          colorScheme="blue"
          isDisabled={!accepted}
          onClick={handleStart}
        >
          Start Test
        </Button>
      </VStack>
    </Box>
  );
}

export default Instructions;