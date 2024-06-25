import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="lg">
          Samadhaan
        </Link>
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/consultants" color="white" mx={2}>
            Consultants
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;