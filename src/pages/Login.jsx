import { useState } from "react";
import { PhoneAuthProvider } from "firebase/auth";
import { Box, Button, Input, VStack, Heading, Text, Select, HStack } from "@chakra-ui/react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebaseConfig";

const countryCodes = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  // Add more country codes as needed
];

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const onSignInSubmit = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Invalid phone number. Please enter a valid 10-digit phone number.");
      return;
    }
    if (phoneNumber === "1234567890") {
      // Bypass OTP verification for the fake number
      onLogin({ phoneNumber: "1234567890" });
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, selectedCountryCode + phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const onVerifyOtp = () => {
    const credential = PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    auth
      .signInWithCredential(credential)
      .then((result) => {
        onLogin(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
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
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="navy"
        mb={8}
      >
        SamadhanGuru
      </Text>
      <Box
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        width="100%"
        maxWidth="400px"
      >
        <Heading mb={4} textAlign="center">Login</Heading>
        <VStack spacing={4}>
          <VStack width="100%">
            <Select
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              width="100%"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </Select>
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              width="100%"
            />
          </VStack>
          <Button onClick={onSignInSubmit} width="100%">Send OTP</Button>
          {verificationId && (
            <>
              <Input
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button onClick={onVerifyOtp} width="100%">Verify OTP</Button>
            </>
          )}
          {error && <Text color="red.500">{error}</Text>}
        </VStack>
      </Box>
      <div id="recaptcha-container"></div>
    </Box>
  );
};

export default Login;