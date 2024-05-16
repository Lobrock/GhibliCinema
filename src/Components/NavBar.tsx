import { HStack, Text } from "@chakra-ui/react";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";
import { BsCameraReels } from "react-icons/bs";
import { Link } from "react-router-dom";

interface NavBarProps {
  onSearch: (searchTerm: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Text fontSize="20px" whiteSpace="nowrap" color="blue" >
          Ghibli-Cinema
        </Text>
      </Link>
      <BsCameraReels className="logo" size="40px"  />

      <SearchInput onSearch={onSearch} />

      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
