import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../lib/theme';
import Layout from '../components/layouts/main'

const Website = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout router={router}> */}
      <Component {...pageProps} key={router.route}></Component>
      {/* </Layout> */}
    </ChakraProvider>
  )
}

export default Website