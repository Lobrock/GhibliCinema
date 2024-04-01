import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
} 

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search movies..."
        variant="filled"
        value={searchTerm}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default SearchInput;
