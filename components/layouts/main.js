import Head from 'next/head'
import { Box, Container } from "@chakra-ui/react"
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Hai Tran - Homepage</title>
      </Head>
      <Navbar path={router.asPath}></Navbar>
      <Container maxWidth="container.md" paddingTop={14}>
        {children}
        <Footer></Footer>
      </Container>
    </Box>
  )
}

export default Main