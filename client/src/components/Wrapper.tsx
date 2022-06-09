import { Box } from '@chakra-ui/react';

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box mt={8} mx='auto' maxW='800px' w='100%'>
      {children}
    </Box>
  );
};
