import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";

type RightContentProps = {
  // user: any
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthModal />
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
