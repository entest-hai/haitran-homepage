// 24 NOV 2021 TRAN MINH HAI test reproduce navbar 
// Link target="_blank" means open in a new tab 
import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, List, ListItem, Icon, SimpleGrid, Button } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import thumbYouTube from './../public/images/links/youtube.png'
import thumbInkdrop from './../public/images/works/inkdrop_eyecatch.png'

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
          Hai is a full-stack web developer and a signal processing engineer based in Hanoi, Vienam with a passion for building digital services/stuff that helpful for users. He belives that products can be realesed with a small team by using new and productive technologies. His tech stack is AWS Amplify, React, NextJS, JavaScript, Python and kee learning at best. Currently, he is creating a web {' '}
          <NextLink href="/test">
            <Link>entest</Link>
          </NextLink> {' '}
          for practicing IELTS and TOEFL tests where authors/gurus can also contribute contents. 
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
      <Section delay={0.3}>
        <Heading as={"h3"} variant={"section-title"}>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @inkdrop_app
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/QfsG5Kj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default Page