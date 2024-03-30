import { Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to={"/"}>
      <Button width={100} marginBottom={5}>
        Home
      </Button>
    </Link>
  );
};

export default HomeButton;
