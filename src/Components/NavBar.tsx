import { HStack, Text } from "@chakra-ui/react";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
import { BsCameraReels } from "react-icons/bs";




const NavBar = () => {
  return (
    <HStack padding="10px">
      <Text fontSize="20px" whiteSpace='nowrap' color='purple'>Ghibli-Cinema</Text>
      <BsCameraReels size='40px' color='purple'/>
      <SearchInput />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
