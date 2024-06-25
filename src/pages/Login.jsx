import { useState } from "react";
import { PhoneAuthProvider } from "firebase/auth";
import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState("");

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

  const onSignInSubmit = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const onVerifyOtp = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
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
    <Box p={4}>
      <Heading mb={4}>Login</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button onClick={onSignInSubmit}>Send OTP</Button>
        {verificationId && (
          <>
            <Input
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={onVerifyOtp}>Verify OTP</Button>
          </>
        )}
        {error && <Text color="red.500">{error}</Text>}
      </VStack>
      <div id="recaptcha-container"></div>
    </Box>
  );
};

export default Login;