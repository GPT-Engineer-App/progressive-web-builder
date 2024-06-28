import { Box, Flex, Button } from "@chakra-ui/react";
import { FaCog, FaUser, FaUsers, FaHome } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Taskbar = () => {
  return (
    <Box bg="teal.500" p={4} position="fixed" bottom="0" width="100%">
      <Flex justify="space-around">
        <Button as={RouterLink} to="/settings" colorScheme="teal" variant="ghost">
          <FaCog size="24px" />
        </Button>
        <Button as={RouterLink} to="/account" colorScheme="teal" variant="ghost">
          <FaUser size="24px" />
        </Button>
        <Button as={RouterLink} to="/consultants" colorScheme="teal" variant="ghost">
          <FaUsers size="24px" />
        </Button>
        <Button as={RouterLink} to="/" colorScheme="teal" variant="ghost">
          <FaHome size="24px" />
        </Button>
      </Flex>
    </Box>
  );
};

export default Taskbar;