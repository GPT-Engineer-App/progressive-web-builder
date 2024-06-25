import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = ({ onFilterChange, selectedCategory, onCategoryChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="lg">
          SamadhanGuru
        </Link>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleFilterChange("rating")}>Sort by Rating</MenuItem>
              <MenuItem onClick={() => handleFilterChange("experience")}>Sort by Experience</MenuItem>
              <MenuItem onClick={() => handleFilterChange("expertise")}>Filter by Expertise</MenuItem>
              <MenuItem onClick={() => handleFilterChange("price")}>Sort by Price</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
              Category
            </MenuButton>
            <MenuList>
              {["Personal", "Marriage", "Career", "Family", "Love", "Health", "Finance"].map((category) => (
                <MenuItem key={category} onClick={() => onCategoryChange(category)}>
                  {category}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;