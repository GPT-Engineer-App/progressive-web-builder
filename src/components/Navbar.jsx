import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = ({ onFilterChange }) => {
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
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal" ml={4}>
              Options
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/settings">Settings</MenuItem>
              <MenuItem as={RouterLink} to="/account">Account</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;