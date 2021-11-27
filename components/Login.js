// 26 NOV 2021 TRAN MINH HAI 
// Compare Box and Flex to create login form 
// justifyContent to align item in main axis 
// alignItem to align item in cross axis 

import {Box, Heading, Flex, Button, useColorMode, useColorModeValue, Input } from '@chakra-ui/react';

const Login = () => {

  const {toggleThemeColor} = useColorMode()
  const formBackground = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Flex flexDirection={'column'} borderRadius={6} bg={formBackground} p={12}>
        <Heading
          mb={6}
        >
          Log In 
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
          variant={'solid'}
          colorScheme={'teal'}
          mb={3}
        >
          Log In
        </Button>
        <Button
          variant={'outline'}
          colorScheme={'teal'}
          onClick={() => {
            console.log('change them color')
            useColorModeValue
          }}
        >
          Toggle Theme Color
        </Button>
      </Flex>
    </Flex>
  )
}

const LoginBox = () => {
  const {toggleThemeColor} = useColorMode()
  return (
    <Box 
      width={'100%'} 
      height={'100vh'} 
      bg={'tomato'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}> 
      <Box
        bg={'gray.200'}
        display={'flex'}
        flexDirection={'column'}
        borderRadius={6}
        p={12}
      >
        <Heading
          mb={6}
        >
          Log In 
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
          variant={'solid'}
          colorScheme={'teal'}
          mb={3}
        >
          Log In
        </Button>
        <Button
          variant={'outline'}
          colorScheme={'teal'}
          onClick={toggleThemeColor}
        >
          Toggle Theme Color
        </Button>
      </Box>
    </Box>
  )
}

export default Login;