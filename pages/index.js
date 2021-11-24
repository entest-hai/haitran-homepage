import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
  return (
    <Container maxWidth={"container.md"}>
      <Box 
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3} 
        mb={6} 
        textAlign="center">
        Hello, I&apos;m a full-stack developer based in Vietnam!
      </Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1} >
          <Heading as="h2" variant="page-title">
            Hai Tran
          </Heading>
          <p>Web Developer / Signal Processing Engineer</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base:4, md:0}} 
          ml={{md:6}} 
          textAlign={"center"}
          >
            <Image
              borderColor={"whiteAlpha.70"}
              borderWidth={2}
              borderStyle={"solid"}
              maxW={"100px"}
              display={"inline-block"}
              borderRadius={"full"}
              src={"/images/hai.jpg"}
              alt={"Profile Image"}
            >
            </Image>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading
          variant={"section-title"}
        >
          Work
        </Heading>
        <Paragraph>
          Hai is a full-stack web developer and a signal processing engineer based in Hanoi, Vienam with a passion for building digital services/stuff that helpful for users. He belives that products can be realesed by using new and productive technologies. When not online, he loves swimming and fishing. Currently, he is using AWS Amplify, React, NextJS to build applications, and also keep learning at best. 
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading 
          as="h3" 
          variant={"section-title"}>
            Bio
        </Heading>
        <BioSection>
          <BioYear>1988</BioYear>
          Born in Hanam, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>
            2016
          </BioYear>
          Completed the Doctor&apos;s Program in Information Engineering at Univ. of The Ryukyus, Japan
        </BioSection>
        <BioSection>
          <BioYear>
            2016
          </BioYear>
          Worked at VTTEK, Viettel, Vietnam 
        </BioSection>
        <BioSection>
          <BioYear>
            2018
          </BioYear>
          Worked at VinID, Vingroup, Vietnam 
        </BioSection>
        <BioSection>
          <BioYear>
            2019 to present
          </BioYear>
          Work at Biorithm, Singapore   
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as={"h3"} variant={"section-title"}>
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page