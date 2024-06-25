import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const consultants = [
  { name: "John Doe", expertise: "Marriage", experience: "10 years", rating: 4.5 },
  { name: "Jane Smith", expertise: "Career", experience: "8 years", rating: 4.7 },
  // Add more consultants as needed
];

const Consultants = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const filteredConsultants = consultants.filter((consultant) => consultant.expertise === category);

  return (
    <Box p={4}>
      <Heading mb={4}>Consultants for {category}</Heading>
      <VStack spacing={4}>
        {filteredConsultants.map((consultant) => (
          <Box key={consultant.name} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontSize="xl">{consultant.name}</Text>
            <Text>Expertise: {consultant.expertise}</Text>
            <Text>Experience: {consultant.experience}</Text>
            <Text>Rating: {consultant.rating}</Text>
            <Button as={Link} to={`/consultant/${consultant.name}`} colorScheme="teal" mt={2}>
              View Details
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Consultants;