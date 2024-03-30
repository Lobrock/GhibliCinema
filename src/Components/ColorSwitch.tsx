import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";


const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  
  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text fontSize="20px" whiteSpace='nowrap' color='purple'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitch;
