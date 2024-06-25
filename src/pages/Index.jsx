import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/homepage.jpg" alt="Homepage" />
        <Text fontSize="2xl">Welcome to the Troubleshooter Web App</Text>
        <Text>Select a category to get started.</Text>
      </VStack>
    </Container>
  );
};

export default Index;