import { HStack,
  Avatar,
  VStack, 
  Heading, 
  List, 
  Link, 
  Icon, 
  Text, 
  Box, 
  ListItem, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  Spacer, 
  useBreakpointValue,
  LinkBox,
  LinkOverlay} from '@chakra-ui/react'; 
import { FaHome, 
  FaCompass, 
  FaMusic, 
  FaUserAlt, 
  FaHeart, 
  FaDatabase } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { GiBackwardTime } from 'react-icons/gi';
import { IoIosSettings } from 'react-icons/io';
import { BsBoxArrowLeft } from 'react-icons/bs';
import NextLink from 'next/link'; 
import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

const navItems = [
  {
    type: 'link',
    href: '/',
    icon: FaHome,
    label: 'Home',
  },
  {
    type: 'link',
    href: '/search',
    icon: RiSearchLine,
    label: 'Search',
  },
  {
    type: 'link',
    href: '/discover',
    icon: FaCompass,
    label: 'Discover',
  },
  {
    type: 'link',
    href: '/clips',
    icon: FaMusic,
    label: 'Clips',
  },
  {
    type: 'link',
    href: '/producers',
    icon: FaUserAlt,
    label: 'Producers',
  },
  {
    type: 'header',
    label: 'Library',
  },
  {
    type: 'link',
    href: '/recent',
    icon: GiBackwardTime,
    label: 'Recent',
  },
  {
    type: 'link',
    href: '/favorites',
    icon: FaHeart,
    label: 'Favorites',
  },
  {
    type: 'link',
    href: '/local',
    icon: FaDatabase,
    label: 'Local',
  },
  {
    type: 'header',
    label: 'General'
  },
  {
    type: 'link',
    href: '/settings',
    icon: IoIosSettings,
    label: 'Settings',
  },
  {
    type: 'link',
    href: '/logout',
    icon: BsBoxArrowLeft,
    label: 'Log Out',
  },
];


const genres = [
  {
    name: 'Afrobeats',
    image: '/images/afrobeats.png',
  },
  {
    name: 'Amapiano',
    image: '/images/amapiano.jpeg',
  },
  {
    name: 'Afropop',
    image: '/images/afropop.jpg',
  },
  {
    name: 'RnB',
    image: '/images/rnb.jpg',
  },
  {
    name: 'Afro-Fusion',
    image: '/images/afro-fusion.jpg',
  },
  {
    name: 'Afrobeats',
    image: '/images/afrobeats.png',
  },
  {
    name: 'Amapiano',
    image: '/images/amapiano.jpeg',
  },
  {
    name: 'Afropop',
    image: '/images/afropop.jpg',
  },
  {
    name: 'RnB',
    image: '/images/rnb.jpg',
  },
  {
    name: 'Afro-Fusion',
    image: '/images/afro-fusion.jpg',
  },
  {
    name: 'Afrobeats',
    image: '/images/afrobeats.png',
  },
  {
    name: 'Amapiano',
    image: '/images/amapiano.jpeg',
  },
  {
    name: 'Afropop',
    image: '/images/afropop.jpg',
  },
  {
    name: 'RnB',
    image: '/images/rnb.jpg',
  },
  {
    name: 'Afro-Fusion',
    image: '/images/afro-fusion.jpg',
  },
];


const MyImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'quality'].includes(prop),
})

const GenresCarousel = () => {

  const imageSize = useBreakpointValue({ base: '80px', md: '96px', '2xl': '192px' }, '2xl');

  return (
    <HStack
      width='full'
      spacing={12}
      overflowX='auto'
      rounded='lg'
      flexShrink={0}
    >
      { genres.map(({name, image}, index ) => (
        <LinkBox
          as='article'
          pb={3}
          role='group'
          key={index}
        >
          <VStack
            spacing={4}
          >
            <Box
              rounded='lg'
              overflow='hidden'
              width={imageSize}
              height={imageSize}
            >
              <LinkOverlay href='#'>
                <MyImage 
                  transition='ease-out'
                  transitionProperty='all'
                  transitionDuration='normal'
                  _groupHover={{
                    transform: 'scale(1.1, 1.1)'
                  }}
                  src={image}
                  width={imageSize}
                  height={imageSize}
                  objectFit='cover'
                  quality="100"
                >
                </MyImage>
              </LinkOverlay>
            </Box>
            <Text
              fontWeight='medium'
            >
              {name}
            </Text>
          </VStack>
        </LinkBox>
      )) }
    </HStack>
  );
}



const NavItem = ({ isActive, item }) => {
  const { label } = item; 

  if (item.type === 'link') {
    const { icon }  = item; 

    return (
      <NextLink href='#' passHref>
        <Link
          variant='unstyled'
          _hover={{
            textDecoration: 'none'
          }}
        >
          <HStack
            align='center'
            justify='flex-start'
            height={{ base: 10, '2xl': 14 }}
            transition='ease-out'
            transitionProperty='background'
            transitionDuration='normal'
            _hover={{
              background: 'gray.dark'
            }}
          >
            <Icon
              width={5}
              height={5}
              mr={4}
              ml={8}
              color={ isActive ? 'brand.red' : 'gray.light' }
              as={icon}
            >
            </Icon>
            <Text
              flex={1}
              fontSize='md'
              fontWeight='medium'
              letterSpacing='wider'
              color={ isActive ? 'brand.red' : 'whiteAlpha.900' }
            >
              {label}
            </Text>
            {isActive && ( <Box width={1} height={6} bg='brand.red'></Box> )}
          </HStack>
        </Link>
      </NextLink>
    );
  }

  return (
    <Heading 
      color='gray.light'
      fontWeight='normal'
      textTransform='uppercase'
      letterSpacing={6}
      fontSize='sm'
      ml={8}
      mt={{ base: 6, '2xl': 8 }}
      mb={2}
    >
      {label}
    </Heading>
  );
}

const MyAvatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>
        Kunle Ajayi
      </Text>
      <Avatar
        name='Kunle Ajayi'
        src='/images/dog-2.jpg'
      ></Avatar> 
    </HStack>
  );
}

const brandRing = {
  _focus: {
    ringColor: '#E14949',
    ring: 3
  }
}

const SearchBar = () => {
  return (
    <HStack width='full'>
      <InputGroup maxW='7xl'>
        <InputLeftElement
          pointerEvents='non'
          children={<RiSearchLine></RiSearchLine>}
        >        
        </InputLeftElement>
        <Input
          variant='outline'
          rounded='lg'
          placeholder='Search for sounds, tracks'
          {...brandRing}
        >
        </Input>
      </InputGroup>
      <Spacer></Spacer>
      <MyAvatar></MyAvatar>
    </HStack>
  );
}



const Logo = () => {
  return (
    <Box p={8} pb={4}>
      <Heading size='lg'>
        afrosmusic
      </Heading>
    </Box>
  );
}


const Sidebar = () => {
  return (
    <VStack
      alignItems='flex-start'
      width='full'
      height='full'
      maxW={{ base: 56, '2xl': 72 }}
      borderRightColor='gray.dark'
      borderRightWidth={2}
      flexShrink={0}
    >
      <Logo></Logo>
      <List
        width='full'
        overflow='auto'
      >
        {navItems.map( (item, index) => (
          <ListItem key={index}>
            <NavItem item={item} isActive={ index === 0 }>
            </NavItem>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
}

const Content = () => {
  return (
    <HStack
      width='full'
      flex={1}
      overflow='hidden'
    >
      <Sidebar></Sidebar>
      <VStack
        px={12}
        pt={12}
        width='full'
        height='full'
        spacing={6}
        overflow='hidden'
      >
        <SearchBar></SearchBar>
        <GenresCarousel></GenresCarousel>
        <HStack
          width='full'
          alignItems='flex-start'
          overflow='hidden'
          flex={1}
        >
          Hai Tran
        </HStack>
      </VStack>
    </HStack>
  );
}

const Dashboard = () => {
  return (
    <VStack
      height='100vh'
      width='full'
      overflow='hidden'
      spacing={0}
    >
      <Content></Content>
    </VStack>
  );
}

export default Dashboard; 
