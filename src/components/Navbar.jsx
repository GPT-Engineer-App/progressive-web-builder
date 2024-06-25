import { Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
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
              <MenuItem>Sort by Rating</MenuItem>
              <MenuItem>Sort by Experience</MenuItem>
              <MenuItem>Filter by Expertise</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;