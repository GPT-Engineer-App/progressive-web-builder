import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = ({ onFilterChange }) => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="lg">
          Samadhaan
        </Link>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal">
              Filter
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => onFilterChange("rating")}>Sort by Rating</MenuItem>
              <MenuItem onClick={() => onFilterChange("experience")}>Sort by Experience</MenuItem>
              <MenuItem onClick={() => onFilterChange("expertise")}>Filter by Expertise</MenuItem>
              <MenuItem onClick={() => onFilterChange("price")}>Sort by Price</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;