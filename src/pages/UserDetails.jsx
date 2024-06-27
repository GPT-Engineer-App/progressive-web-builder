import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserDetails = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState(null);
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
        <DatePicker
          selected={dob}
          onChange={(date) => setDob(date)}
          placeholderText="Date of Birth"
          dateFormat="yyyy/MM/dd"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
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