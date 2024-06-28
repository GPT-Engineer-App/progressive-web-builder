import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Taskbar = () => {
  return (
    <Box bg="teal.500" p={4} position="fixed" bottom="0" width="100%">
      <Flex justify="space-around">
        <Button as={RouterLink} to="/settings" colorScheme="teal" variant="ghost">
          Settings
        </Button>
        <Button as={RouterLink} to="/account" colorScheme="teal" variant="ghost">
          Account
        </Button>
        <Button as={RouterLink} to="/consultants" colorScheme="teal" variant="ghost">
          Consultants
        </Button>
        <Button as={RouterLink} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
      </Flex>
    </Box>
  );
};

export default Taskbar;