import { Box, Heading, VStack, Text, Button, HStack, Center } from "@chakra-ui/react";
import { FaComments, FaPhone, FaVideo } from "react-icons/fa";
import { useParams } from "react-router-dom";

const compliments = [
  { consultant: "John Doe", compliments: ["Great advice!", "Very helpful.", "Highly recommended."] },
  { consultant: "Jane Smith", compliments: ["Excellent guidance.", "Very professional.", "Helped me a lot."] },
  // Add more compliments as needed
];

const ConsultantDetail = () => {
  const { name } = useParams();
  const consultantCompliments = compliments.find((c) => c.consultant === name)?.compliments || [];

  // Assuming the chat price is displayed as a range (e.g., Rs. 2-50)
  const chatPriceRange = "Rs. 2-50";
  const chatPriceMax = parseInt(chatPriceRange.split('-')[1].trim().replace('Rs. ', ''));
  const callPrice = chatPriceMax * 1.2;
  const videoCallPrice = chatPriceMax * 1.4;

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
          <Button leftIcon={<FaComments />} colorScheme="green"></Button>
          <Button leftIcon={<FaPhone />} colorScheme="blue"></Button>
          <Button leftIcon={<FaVideo />} colorScheme="green"></Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default ConsultantDetail;