import { Box, VStack, Button, Wrap, WrapItem } from "@chakra-ui/react";
import Consultants from "./Consultants.jsx";
import { useState } from "react";


const Home = () => {
  const categories = ["Personal", "Marriage", "Career", "Family", "Love", "Health", "Finance"];
  const [selectedCategory, setSelectedCategory] = useState("Personal");
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <Box p={4}>
      
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
      <Consultants category={selectedCategory} filter={filter} />
    </Box>
  );
};

export default Home;