/* eslint-disable react/no-children-prop */
// 26 NOV 2021 TRAN MINH HAI 
// Compare Box and Flex to create login form 
// justifyContent to align item in main axis 
// alignItem to align item in cross axis 
import {Box, Heading, Flex, Button, useColorMode, useColorModeValue, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { ViewIcon } from '@chakra-ui/icons';

// const ToggleTheme = () => {
//   const { toggleColorMode } = useColorMode()
//   return (
//     <Button
//       onClick={toggleColorMode}
//     >
//           Toggle Theme Mode
//     </Button>
//   )
// }

const Login = () => {

  const { _, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('white.200', 'white.700')

  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDirection={'column'} borderRadius={6} bg={formBackground} p={12}>
        <Heading
          size={'lg'}
          mb={6}
        >
          Enter your account
        </Heading>
        <InputGroup mb={3}>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon/>}
          />
          <Input type="tel" placeholder="Email" />
        </InputGroup>
        <InputGroup mb={3}>
          <InputLeftElement 
            pointerEvents={'none'}
            children={<ViewIcon/>}
          >
          </InputLeftElement>
          <Input
            variant={'filled'}
            placeholder={'password'}
            type={'password'}
            mb={6}
          >
          </Input>
        </InputGroup>
        <Button
          onClick={toggleColorMode}
          variant={'solid'}
          colorScheme={'teal'}
          mb={3}
        >
          Sign In
        </Button>
        {/* <ToggleTheme></ToggleTheme> */}
      </Flex>
    </Flex>
  )
}

export const LoginBox = () => {
  const { _, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      width={'100%'} 
      height={'100vh'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}> 
      <Box
        bg={formBackground}
        display={'flex'}
        flexDirection={'column'}
        borderRadius={6}
        p={12}
      >
        <Heading
          mb={6}
        >
          Log In Box
        </Heading>
        <Input
          placeholder={'username'}
          mb={3}
        >
        </Input>
        <Input
          placeholder={'password'}
          mb={6}
        >
        </Input>
        <Button
          onClick={toggleColorMode}
          variant={'solid'}
          colorScheme={'teal'}
          mb={3}
        >
          Log In
        </Button>
        {/* <ToggleTheme></ToggleTheme> */}
      </Box>
    </Box>
  )
} 

export default Login;