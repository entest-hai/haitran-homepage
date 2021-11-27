import {Box } from '@chakra-ui/react';
import Login from '../components/Login';
import { LoginBox } from '../components/Login';

const TestLogin = () => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Login></Login>
      <LoginBox></LoginBox>
    </Box>
  )
}

export default TestLogin