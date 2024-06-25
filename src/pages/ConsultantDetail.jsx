import { Box, Heading, VStack, Text, Button, HStack, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const compliments = [
  { consultant: "John Doe", compliments: ["Great advice!", "Very helpful.", "Highly recommended."] },
  { consultant: "Jane Smith", compliments: ["Excellent guidance.", "Very professional.", "Helped me a lot."] },
  // Add more compliments as needed
];

const ConsultantDetail = () => {
  const { name } = useParams();
  const consultantCompliments = compliments.find((c) => c.consultant === name)?.compliments || [];

  return (
    <Box p={4}>
      <Heading mb={4}>{name}</Heading>
      <VStack spacing={4} align="start">
        <Heading size="md">Compliments</Heading>
        {consultantCompliments.map((compliment, index) => (
          <Text key={index}>"{compliment}"</Text>
        ))}
      </VStack>
      <Center mt={6}>
        <HStack spacing={4}>
          <Button colorScheme="green">Chat (Rs. 2-50)</Button>
          <Button colorScheme="blue">Call (Higher)</Button>
          <Button colorScheme="green">Video Call (Highest)</Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default ConsultantDetail;