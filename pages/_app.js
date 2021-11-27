import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../lib/theme';


const Website = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} key={router.route}></Component>
    </ChakraProvider>
  )
}

export default Website