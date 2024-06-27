import { useState } from "react";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserDetails = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);

  const handleSubmit = () => {
    onSubmit({ fullName, dob });
  };

  return (
    <Box
      p={4}
      backgroundImage="url('/images/green-textured-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        width="100%"
        maxWidth="400px"
      >
        <Heading mb={4} textAlign="center">User Details</Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            placeholderText="Date of Birth"
            dateFormat="yyyy/MM/dd"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default UserDetails;