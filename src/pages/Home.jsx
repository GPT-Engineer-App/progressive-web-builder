import { Box, Heading, VStack, Button, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import Consultants from "./Consultants.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const categories = ["Personal", "Marriage", "Career", "Family", "Love", "Health", "Finance"];
  const [selectedCategory, setSelectedCategory] = useState("Personal");

  return (
    <Box p={4}>
      <Heading mb={4}>Samadhaan Categories</Heading>
      <Wrap spacing={4} justify="center">
        {categories.map((category) => (
          <WrapItem key={category}>
            <Button
              colorScheme={selectedCategory === category ? "blue" : "gray"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Consultants category={selectedCategory} />
    </Box>
  );
};

export default Home;