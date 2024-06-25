import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const consultants = [
  { name: "John Doe", expertise: "Marriage", experience: "10 years", rating: 4.5 },
  { name: "Jane Smith", expertise: "Career", experience: "8 years", rating: 4.7 },
  { name: "Alice Johnson", expertise: "Family", experience: "12 years", rating: 4.8 },
  { name: "Bob Brown", expertise: "Love", experience: "7 years", rating: 4.6 },
  { name: "Charlie Davis", expertise: "Health", experience: "9 years", rating: 4.9 },
  { name: "Diana Evans", expertise: "Finance", experience: "11 years", rating: 4.4 },
  { name: "Eve Foster", expertise: "Personal", experience: "5 years", rating: 4.3 },
  { name: "Frank Green", expertise: "Marriage", experience: "6 years", rating: 4.2 },
  { name: "Grace Harris", expertise: "Career", experience: "4 years", rating: 4.1 },
  { name: "Hank Irving", expertise: "Family", experience: "8 years", rating: 4.0 },
  { name: "Ivy Johnson", expertise: "Love", experience: "10 years", rating: 4.7 },
  { name: "Jack King", expertise: "Health", experience: "12 years", rating: 4.6 },
  { name: "Karen Lee", expertise: "Finance", experience: "9 years", rating: 4.5 },
  { name: "Leo Martin", expertise: "Personal", experience: "7 years", rating: 4.4 },
  { name: "Mona Nelson", expertise: "Marriage", experience: "5 years", rating: 4.3 },
  { name: "Nina Owens", expertise: "Career", experience: "6 years", rating: 4.2 },
  { name: "Oscar Perry", expertise: "Family", experience: "4 years", rating: 4.1 },
  { name: "Paul Quinn", expertise: "Love", experience: "8 years", rating: 4.0 },
  { name: "Quincy Roberts", expertise: "Health", experience: "10 years", rating: 4.9 },
  { name: "Rachel Scott", expertise: "Finance", experience: "12 years", rating: 4.8 },
  { name: "Steve Turner", expertise: "Personal", experience: "9 years", rating: 4.7 },
  { name: "Tina Underwood", expertise: "Marriage", experience: "7 years", rating: 4.6 },
  { name: "Uma Vance", expertise: "Career", experience: "5 years", rating: 4.5 },
  { name: "Victor White", expertise: "Family", experience: "6 years", rating: 4.4 },
  { name: "Wendy Xander", expertise: "Love", experience: "4 years", rating: 4.3 },
  { name: "Xander Young", expertise: "Health", experience: "8 years", rating: 4.2 },
  { name: "Yara Zane", expertise: "Finance", experience: "10 years", rating: 4.1 },
  { name: "Zack Adams", expertise: "Personal", experience: "12 years", rating: 4.0 },
];

const Consultants = ({ category }) => {

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
            <Button as={Link} to={`/consultant/${consultant.name}`} colorScheme="blue" mt={2}>
              View Details
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Consultants;