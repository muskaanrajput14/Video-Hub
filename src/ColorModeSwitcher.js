import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      pos={"fixed"}
      top={"4"}
      right={"4"}
      // 4 is chakra unit 
      // 1 = 4px
      zIndex={'overlay'}
      {...props}
    />
  );
};

export default ColorModeSwitcher; 