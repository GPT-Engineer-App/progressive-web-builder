import { Box, Heading, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = ["Marriage", "Career", "Family", "Love", "Personal", "Health", "Finance"];

  return (
    <Box p={4}>
      <Heading mb={4}>Troubleshooter Categories</Heading>
      <VStack spacing={4}>
        {categories.map((category) => (
          <Button as={Link} to={`/consultants?category=${category}`} key={category} colorScheme="teal" variant="outline">
            {category}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Home;