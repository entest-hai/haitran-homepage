import {Box, Heading, Flex, Button, useColorMode, Input } from '@chakra-ui/react';

const Login = () => {

  const {toggleColorMode} = useColorMode() 

  return (
    <Flex height={'100vh'} bg={'tomato'}>
      <Flex 
        bg={'gray.200'} 
        // width={300}
        m={'auto'} 
        mt={200} flexDirection='column' 
        display={'flex'}
        p={12}
        borderRadius={6}
        justifyItems={'center'}
      >
        <Heading
          mb={6}
        >
        Log In
        </Heading>
        <Input
          mb={3}
          placeholder={'username'}
        >
        </Input>
        <Input
          mb={6}
          placeholder={'password'}
        >
        </Input>
        <Button
          mb={3}
          variant={'solid'}
          colorScheme={'teal'}
        >
        Log In
        </Button>
        <Button
          onClick={toggleColorMode}
          variant={'outline'}
          colorScheme={'teal'}
        >
        Toggle Theme Color 
        </Button>
      </Flex>
    </Flex>
  )
}

export default Login;