import { Container, Box, Heading } from "@chakra-ui/react"


const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} alignContent="center">
        Hello, I&apos;m a full-stack developer based in Vietnam!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1} >
          <Heading as="h2" variant="page-title">
            Hai Tran
          </Heading>
          <p>Digital Craftman (Artist / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page