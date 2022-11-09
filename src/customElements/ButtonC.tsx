import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonC: React.FC<{ children: string }> = ({ children }) => {
	return <Button bg='primary'>{children}</Button>;
};

export default ButtonC;
