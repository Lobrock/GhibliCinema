import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosHeart } from "react-icons/io";

const HeartButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setClicked(!clicked);
  };
  return (
    <Button onClick={handleClick}>
      <IoIosHeart
        cursor="pointer"
        size="30"
        color={clicked ? "red" : "black"}
      />
    </Button>
  );
};

export default HeartButton;
