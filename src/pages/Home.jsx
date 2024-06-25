import { Box, Heading, VStack, Button, HStack } from "@chakra-ui/react";
import Consultants from "./Consultants.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const categories = ["Personal", "Marriage", "Career", "Family", "Love", "Health", "Finance"];
  const [selectedCategory, setSelectedCategory] = useState("Personal");

  return (
    <Box p={4}>
      <Heading mb={4}>Samadhaan Categories</Heading>
      <HStack spacing={4} overflowX="auto">
        {categories.map((category) => (
          <Button
            key={category}
            colorScheme={selectedCategory === category ? "teal" : "gray"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </HStack>
      <Consultants category={selectedCategory} />
    </Box>
  );
};

export default Home;