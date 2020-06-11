import React from 'react';
import { Box, BoxHeader, BoxBody, BoxFooter } from './styles';
import { Divider } from 'react-native-elements';

interface BoxProps {
  marginTop?: number;
  boxHeader: React.ReactNode;
  boxFooter?: {
    action(): void;
  };
}

const MyBox: React.FC<BoxProps> = ({
  children,
  boxHeader,
  marginTop,
  boxFooter,
}) => {
  return (
    <Box style={{ marginTop }}>
      <BoxHeader>{boxHeader}</BoxHeader>
      <BoxBody>{children}</BoxBody>
      {boxFooter && (
        <>
          <Divider />
          <BoxFooter />
        </>
      )}
    </Box>
  );
};

export default MyBox;
