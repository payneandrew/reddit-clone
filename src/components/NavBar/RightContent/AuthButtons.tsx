import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  return (
    <ButtonGroup gap="4">
      <Button colorScheme="orange">Log In</Button>
      <Button colorScheme="orange">Sign Up</Button>
    </ButtonGroup>
  );
};
export default AuthButtons;
