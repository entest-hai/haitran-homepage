import { useMemo } from 'react'; 
import { HStack,
  Container,
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
  Table, 
  Flex,
  Thead,
  Tbody, 
  Tr, 
  Td,
  Th,
  LinkOverlay,
  SimpleGrid,
  IconButton,
  Tooltip} from '@chakra-ui/react';
import { useTable, Column } from 'react-table';
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
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaStepBackward, FaPlay, FaStepForward, FaVolumeUp,  } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { RiPlayListFill } from 'react-icons/ri';



const topPicks = [{
  image: '/images/ginger-me.jpg',
  name: 'Ginger Me',
  producer: 'Rexx Dee',
  category: 'Afropop, Fusion',
  time: '03:52',
}, {
  image: '/images/body-no-be-firewood.jpg',
  name: 'Body no be firewood',
  producer: 'Oju Kan',
  category: 'Ambient',
  time: '04:35',
}, {
  image: '/images/evident.jpg',
  name: 'Evident',
  producer: 'Bad Man Flex',
  category: 'Amapiano',
  time: '03:48',
}, {
  image: '/images/bridge.jpg',
  name: 'Ginger Me',
  producer: 'Blessed Up',
  category: 'Afropop, Fusion',
  time: '03:18',
}, {
  image: '/images/trail.jpg',
  name: 'Hello Jim',
  producer: 'Ruth The Child',
  category: 'RnB',
  time: '02:59',
}, {
  image: '/images/yellow-car.jpg',
  name: 'Invincible',
  producer: 'Mega Squad',
  category: 'Amapiano',
  time: '05:16',
}, {
  image: '/images/plant.jpg',
  name: 'Ripple',
  producer: 'The Materials',
  category: 'RnB',
  time: '03:52',
}, {
  image: '/images/ginger-me.jpg',
  name: 'Ginger Me',
  producer: 'Rexx Dee',
  category: 'Afropop, Fusion',
  time: '03:52',
}, {
  image: '/images/body-no-be-firewood.jpg',
  name: 'Body no be firewood',
  producer: 'Oju Kan',
  category: 'Ambient',
  time: '04:35',
}, {
  image: '/images/evident.jpg',
  name: 'Evident',
  producer: 'Bad Man Flex',
  category: 'Amapiano',
  time: '03:48',
}, {
  image: '/images/ginger-me.jpg',
  name: 'Ginger Me',
  producer: 'Rexx Dee',
  category: 'Afropop, Fusion',
  time: '03:52',
}, {
  image: '/images/body-no-be-firewood.jpg',
  name: 'Body no be firewood',
  producer: 'Oju Kan',
  category: 'Ambient',
  time: '04:35',
}, {
  image: '/images/evident.jpg',
  name: 'Evident',
  producer: 'Bad Man Flex',
  category: 'Amapiano',
  time: '03:48',
}, {
  image: '/images/bridge.jpg',
  name: 'Ginger Me',
  producer: 'Blessed Up',
  category: 'Afropop, Fusion',
  time: '03:18',
}, {
  image: '/images/trail.jpg',
  name: 'Hello Jim',
  producer: 'Ruth The Child',
  category: 'RnB',
  time: '02:59',
},];

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

const HeaderCell = ({ value }) => {
  return (
    <Heading
      size='xs'
      textTransform='none'
      color='gray.light'
    >
      {value}
    </Heading>
  );
}


const TopPicks = ( props ) => {
  const data = useMemo(() => topPicks, []);
  const columns = useMemo(() => [{
    accessor: 'image',
    width: '100px',
    Cell: ({value}) => (
      <VStack alignItems='flex-start' justifyContent='center'>
        <MyImage
          src={value}
          width='56px'
          height='56px'
          minW='56px'
          minH='56px'
          rounded='xl'
          objectFit='cover'
          quality='75'
        >
        </MyImage>
      </VStack>
    )
  },{
    Header: () => <HeaderCell value='Name'></HeaderCell>, accessor:'name'
  }, {
    Header: () => <HeaderCell value='Producer'></HeaderCell>, accessor:'producer'
  }, {
    Header: () => <HeaderCell value='category'></HeaderCell>, accessor:'category'
  }, {
    Header: () => <HeaderCell value='Time'></HeaderCell>, accessor: 'time', width: '40px'
  }, {
    Header: () => <HeaderCell value='Buy'></HeaderCell>, id: 'buy', width: '40px', 
    Cell: () => (
      <IconButton
        icon={<FaShoppingCart></FaShoppingCart>}
        aria-label='Buy Song'
        rounded='full'
        {...brandRing}
      >
      </IconButton>
    )
  }], [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow} = useTable({columns, data})


  return (
    <VStack align='flex-start' height='full' {...props}>
      <Heading>Top Picks</Heading>
      <Flex overflowY='auto' width='full'>
        <Table {...getTableProps()} position='relative'>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th width={column.width} {...column.getHeaderProps()} borderBottom={0} position='sticky' zIndex='banner' top={0} bg='black'>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <Tr
                  {...row.getRowProps()}
                  transition='ease-out'
                  transitionProperty='background'
                  transitionDuration='normal'
                  _hover={{
                    background: 'gray.dark',
                    cursor:'pointer'
                  }}
                >
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()} py={2} borderBottom={0} paddingInlineEnd={0} minW={cell.column.width}>
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Flex>
    </VStack>
  );
}

const topProducers = [{
  name: 'BoyFlex',
  image: '/images/dog-1.jpg',
}, {
  name: 'WhyFly',
  image: '/images/dog-2.jpg',
}, {
  name: 'DJ Space',
  image: '/images/dog-3.jpg',
}, {
  name: 'Wonda Ace',
  image: '/images/dog-4.jpg',
}, {
  name: 'West Boy',
  image: '/images/dog-5.jpg',
}, {
  name: 'Suga Wyle',
  image: '/images/dog-6.jpg',
}]


const Producer = ( {name, image, badge} ) => {
  const size = useBreakpointValue({ base: '48px', '2xl': '80px' }, '2xl')
  return (
    <VStack>
      <Box position='relative'>
        <MyImage
          src={image}
          width={size}
          height={size}
          rounded='lg'
          objectFit='cover'
        />
        {
          badge && (
            <Box
              bg='pink.200'
              position='absolute'
              top={-3}
              right={-3}
              rounded='full'
              width={6}
              height={6}
              borderWidth={4}
              borderColor='black'
            />
          )}
      </Box>
      <Text fontSize='sma' fontWeight='medium'>{name}</Text>
    </VStack>
  );
}


const TopProducers = ( props ) => {
  return (
    <VStack {...props} align='flex-start' spacing={{base: 6, '2xl': 8}} height='full' pb={6}>
      <Heading size='md'>Top Producer</Heading>
      <SimpleGrid columns={3} gap={{base: 4, '2xl': 8}}>
        {topProducers.map((producer, index) => (
          <Producer name={producer.name} image={producer.image} key={index} badge={index === 0}></Producer> 
        ))}        
      </SimpleGrid>
      <VStack flex={1} spacing={4} alignItems='flex-start' width='full'>
        <Heading
          color='gray.light'
          fontWeight='normal'
          textTransform='uppercase'
          letterSpacing={3}
          fontSize='sm'
        >
          Your selection 
        </Heading>
        <VStack
          width='full'
          flex={1}
          bg='gray.dark'
          alignItems='center'
          justifyContent='center'
          rounded='lg'
        >
          <Heading
            color='gray.light'
            fontWeight='normal'
            fontSize='xl'
          >
            Nothing selected 
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  );
}

const MotionBox = motion(Box); 

const Disc = () => {
  return (
    <MotionBox
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 3, 
        repeat: Infinity,
        type: 'tween',
        ease: 'linear'
      }}
      rounded='full'
      overflow='hidden'
      position='relative'
      maxW={20}
      maxH={20}
      width='full'
      height='full'
    >
      <MyImage
        src='/images/gradient-mesh.png'
        width="80px"
        height='80px'
        objectFit='cover'
      >
      </MyImage>
      <Flex
        position='absolute'
        inset={0}
        alignItems='center'
        justifyContent='center'
      >
        <Box
          width={6}
          height={6}
          bg='gray.dark'
          rounded='full'
        >
        </Box>
      </Flex>
    </MotionBox>
  );
}

const PlayerControl = ({ label, icon, color }) => {
  return (
    <Tooltip label={label} placement="top">
      <IconButton
        aria-label={label}
        icon={icon}
        rounded='full'
        color={color}
        {...brandRing}
      >
      </IconButton>
    </Tooltip>
  );
}


const SongInfor = () => {
  return (
    <HStack spacing={8}>
      <VStack spacing={2} alignItems='flex-start'>
        <Heading size='sm' >
          As board as daylight
        </Heading>
        <Text fontSize={14} color='gray.light'>
          Moonlight Walker
        </Text>
      </VStack>
      <PlayerControl
        label='Add to favorites'
        icon={<FaHeart></FaHeart>}
        color='pink.200'
      >
      </PlayerControl>
    </HStack>
  );
}

const PlayerControls = ({ controls }) => {
  return (
    <HStack spacing={4}>
      {controls.map(({label, icon}) => (
        <PlayerControl key={label} label={label} icon={icon}>
        </PlayerControl>
      ))}
    </HStack>
  );
}


const PlayerProgress = () => {
  return (
    <HStack spacing={3} flex={1}>
      <Text fontSize={12} color='gray.light'>
        01:45
      </Text>
      <Box
        flex={1}
        width='full'
        height={1}
        bg='gray.light'
        position='relative'
        rounded='full'
        overflow='hidden'
      >
        <Box
          width='75%'
          height={1}
          left={0}
          insetY={0}
          bg='pink.200'
          rounded='full'
        >
        </Box>
      </Box>
      <Text fontSize={12} color='gray.light'>
        04:30
      </Text>
    </HStack>
  );
}

const Player = () => {
  return (
    <Box
      width='full'
      bg='gray.dark'
      height={{base: 24, '2xl': 32}}
      flexShrink={0}
    >
      <Container
        centerContent
        height='full'
        maxW='7xl'
      >
        <HStack
          width='full'
          height='full'
          justifyContent='flex-start'
          spacing={12}
        >
          <Disc></Disc>
          <SongInfor></SongInfor>
          <PlayerControls
            controls={[
              {label: 'Previous song', icon: <FaStepBackward></FaStepBackward>},
              {label: 'Play song', icon: <FaPlay></FaPlay>},
              {label: 'Next song', icon: <FaStepForward></FaStepForward>}
            ]}
          >
          </PlayerControls>
          <PlayerProgress></PlayerProgress>
          <PlayerControls
            controls={[
              {label: 'Control volume', icon: <FaVolumeUp></FaVolumeUp>},
              {label: 'Enable repeat', icon: <FiRepeat></FiRepeat>},
              {label: 'Playlist', icon: <RiPlayListFill></RiPlayListFill>}
            ]}
          >
          </PlayerControls>
        </HStack>
      </Container>
    </Box>
  );
}


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
          <TopPicks flex={1}></TopPicks>
          <TopProducers flexShrink={0}></TopProducers>
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
      <Player></Player>
    </VStack>
  );
}

export default Dashboard; 
