import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";

const UserDetails = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    onSubmit({ fullName, dob, details });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>User Details</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Input
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default UserDetails;