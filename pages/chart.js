// 04 DEC 2021 TRAN MINH HAI chat 
import {Text,
  Button,
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  VStack,
  Input,
  List,
  ListItem, 
  Stat,
  StatNumber,
  StatLabel} from '@chakra-ui/react'; 
import {MdDashboard, MdMail, MdSettings} from 'react-icons/md';
import {HiLightningBolt, HiBell, HiTag, HiSearch} from 'react-icons/hi'; 
import {RiDribbbleLine, RiInstagramLine, RiTwitterFill} from 'react-icons/ri'; 
import {IoSend} from 'react-icons/io5';
import {FaBell} from 'react-icons/fa';


const onlineFriends = ['Hai',
  'Ha',
  'Alex',
  'Min',
  'Tran',
  'John',
  'David',
  'Mike',
  'Shane',
  'Miky',
  'Leo'];


const messages = [
  {
    message: 'Hey Travis! Would you like to go out for a coffee?',
    from: 'others',
    dateSent: '20:21'
  },
  {
    message: 'Sure! At 11:00 am?',
    from: 'me',
    dateSent: '20:22'
  },
  {
    message: 'That\'s too early! How about at noon?',
    from: 'others',
    dateSent: '20:22'
  },
  {
    message: 'That sounds good as well. Where should we meet?',
    from: 'me',
    dateSent: '20:23'
  },
  {
    message: 'Meet me at the hardware store on 21 Duck Street.',
    from: 'others',
    dateSent: '20:23'
  },
  {
    message: 'Sounds good. I\'ll bring my friend with me as well!',
    from: 'me',
    dateSent: '20:24'
  },
  {
    message: 'Which one? The developer or the designer?',
    from: 'others',
    dateSent: '20:24'
  },
  {
    message: 'The developer. You remember Tony, right?',
    from: 'me',
    dateSent: '20:24'
  },
  {
    message: 'Yeah! Tony\'s a great guy!',
    from: 'others',
    dateSent: '20:25'
  },
  {
    message: 'Indeed he is! Alright, see you later 👋!',
    from: 'me',
    dateSent: '20:25'
  }
];

const ChatBubble = ({message, dateSent, from}) => {
  const isMe = from == 'me'
  const alignment = isMe ? 'flex-end' : 'flex-start'
  const bottomRightRadius = isMe ? 0 : 32 
  const bottomLeftRadius = isMe ? 32 : 0
  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Box
        bg={isMe ? 'blue.50' : 'gray.100'}
        px={6}
        py={4}
        maxW={80}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        {message}
      </Box>
      <Text fontSize='xs' color='gray'>
        {dateSent}
      </Text>
    </VStack>
  );
}

const Chat = () => {
  return (
    <Flex width='full' flexDirection='column'>
      <HStack px={4} py={4} borderBottomColor='gray.100' borderBottomWidth={1}>
        <Input variant='filled' rounded='full' placeholder='Search friends' />
      </HStack>
      <Flex px={6} overflowY='auto' flexDirection='column' flex={1}>
        <Stat mt={6}>
          <StatLabel color='gray.500'>
            Chatting with
          </StatLabel>
          <StatNumber>
            Dina Harrison
          </StatNumber>
        </Stat>
        {messages.map(({message, from, dateSent}, index) => {
          return (
            <ChatBubble 
              key={index} 
              message={message} 
              from={from} 
              dateSent={dateSent}
            >
            </ChatBubble>);
        })}
      </Flex>
      <Flex pl={4} pr={2} py={2} borderTopColor='gray.100' borderTopWidth={1}>
        <Input variant='unstyled' placeholder='Type your message'>
        </Input>
        <IconButton
          colorScheme='blue'
          aria-label='Send message'
          variant='ghost'
          icon={<IoSend></IoSend>}
        >
          
        </IconButton>
      </Flex>
    </Flex>
  );
}


const ChatFiles = () => {
  return (
    <Flex h='full' flexDirection='column' alignItems='center' w='full' pt={8}>
      <HStack justify='space-between' w='full' px={8} mb={8}>
        <Text color='gray.500'>05 DEC 2021</Text>
        <IconButton
          rounded='full'
          icon={<FaBell></FaBell>}
          color='gray.500'
          variant='ghost'
          aria-label='Notification'
        >
        </IconButton>
      </HStack>
      <Avatar size='2xl' name='Dina Harrison'>
        <AvatarBadge boxSize={8} borderWidth={4} bg='green.400'>
          
        </AvatarBadge>
      </Avatar>
      <Heading 
        size='md' 
        mt={3}
      >
        Dina Harrison
      </Heading>
      <HStack px={8} justifyContent='center' spacing={3} mt={6}>
        <IconButton
          h={10}
          icon={<RiDribbbleLine></RiDribbbleLine>}
          variant='ghost'
          rounded='full'
          color='gray.500'
        >
        </IconButton>
        <IconButton
          h={10}
          icon={<RiInstagramLine></RiInstagramLine>}
          variant='ghost'
          rounded='full'
          color='gray.500'
        >
        </IconButton>
        <IconButton
          h={10}
          icon={<RiTwitterFill></RiTwitterFill>}
          variant='ghost'
          rounded='full'
          color='gray.500'
        >
        </IconButton>
      </HStack>
      <Box px={8} w='full'>
        <Divider mt={6} color='gray.100'></Divider>
      </Box>
      <VStack spacing={6} overflowY='auto' w='full'>
        <HStack px={8} w='full' mt={6} justifyContent='space-between'>
          <Heading size='md'>Share files</Heading>
          <Button fontWeight='normal' variant='text' size='xs' color='blue'>
            see all 
          </Button>
        </HStack>
        <List spacing={4} mt={6} width='full'>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
          <ListItem>
            <ChatFile></ChatFile>
          </ListItem>
        </List>
        <Box px={8} w='full'>
          <Divider mt={6} color='gray.100'></Divider>
        </Box>
        <HStack px={8} w='full' mt={6} justifyContent='space-between'>
          <Heading size='md'>Share links</Heading>
          <Button fontWeight='normal' variant='text' size='xs' color='blue'>
            see all 
          </Button>
        </HStack>
        <List pb={6} spacing={4} mt={6} w='full'> 
          <ListItem>
            <ChatLink></ChatLink>
          </ListItem>
          <ListItem>
            <ChatLink></ChatLink>
          </ListItem>
          <ListItem>
            <ChatLink></ChatLink>
          </ListItem>
          <ListItem>
            <ChatLink></ChatLink>
          </ListItem>
          <ListItem>
            <ChatLink></ChatLink>
          </ListItem>
        </List>
      </VStack>
    </Flex>
  );
}


const ChatLink = () => {
  return (
    <HStack w='full' px={8} spacing={3}>
      <Box w={14} h={12} rounded='lg' bg='gray.100'></Box>
      <VStack spacing={0} alignItems='flex-start' w='full'>
        <HStack width='full' justifyContent='space-between'>
          <Heading fontSize={12} size='sm'>
            Dribbble.com 
          </Heading>
          <Text fontSize={12} color='gray.400'>
            11:43
          </Text>
        </HStack>
        <Text fontSize={12} color='gray.400'>
            10:03:40
        </Text>
      </VStack>
    </HStack>
  );
}

const ChatFile = () => {
  return (
    <HStack w='full' px={8} spacing={3}>
      <Box w={14} h={12} rounded='lg' bg='gray.100'>
      </Box>
      <VStack spacing={0} alignItems='flex-start' w='full'>
        <Heading fontSize={12} width='full'>
          PhoLoDenver.jpg
        </Heading>
        <HStack width='full' justifyContent='space-between'>
          <Text fontSize={12} color='gray.400'>
            10.03.2021 at 11:43
          </Text>
          <Text fontSize={12} color='gray.400'>
            175 Kb
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}



const ChatRow = () => {
  return (
    <Flex
      py={4}
      px={8}
      w='full'
      alignItems='center'
      borderBottomColor='gray.100'
      borderBottomWidth={1}
      style={{transition: 'background 300ms'}}
      _hover={{ bg: 'gray.50', cursor: 'pointer' }}
    >
      <Box rounded='full' bg='gray.100' minw={14} minH={14}></Box>
      <VStack 
        overflow='hidden' 
        flex={1} 
        ml={3} 
        spacing={0} 
        alignItems='flex-start'
      >
        <Heading fontSize={12} w='full'>
          John Shinoda
        </Heading>
        <Text 
          overflow='hidden' 
          textOverflow='ellipsis' 
          whiteSpace='nowrap' 
          width='full' 
          fontSize='sx' 
          color='gray.500'
        >
          Sample text message goes here 
        </Text>
      </VStack>
      <Text ml={3} fontSize='xs' color='gray.500'>
        08:30
      </Text>
    </Flex>
  );
}


const UserAvatar = ({name}) => {
  return (
    <Tooltip label={name}>
      <Avatar name={name}>
        <AvatarBadge boxSize={4} bg="green.500">
        </AvatarBadge>
      </Avatar>
    </Tooltip>
  );
}


const Navigation = () => {  
  return (
    <VStack p={6} justifyContent='space-between' alignItems='center' w='full'>
      <VStack>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<MdDashboard />} aria-label='Dashboard'></IconButton>
        </Tooltip>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<HiLightningBolt />} aria-label='Dashboard'></IconButton>
        </Tooltip>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<HiSearch />} aria-label='Dashboard'></IconButton>
        </Tooltip>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<HiBell />} aria-label='Dashboard'></IconButton>
        </Tooltip>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<HiTag />} aria-label='Dashboard'></IconButton>
        </Tooltip>
        <Tooltip label='Dashboard' placement='right'>
          <IconButton color='gray.500' icon={<MdMail />} aria-label='Dashboard'></IconButton>
        </Tooltip>
      </VStack>
      <Tooltip label='Dashboard' placement='right'>
        <IconButton color='gray.500' icon={<MdSettings />} aria-label='Dashboard'></IconButton>
      </Tooltip>
    </VStack>
  );
}

const ChatHistorySidebar = () => {
  return (
    <VStack height="full" alignItems="center" w="full" spacing={6}>
      <Flex width='full' flexDirection='column' alignItems='center' justifyContent='flex-start'>
        <Avatar name='Hai Tran' size={'2xl'}>
          <AvatarBadge bg='green.400' boxSize={8} borderWidth={4} />
        </Avatar>
        <VStack>
          <Heading size='md' mt={{base: 0, lg: 3}}>
            Hai Tran 
          </Heading>
          <HStack px={8} justifyContent='center' spacing={3} mt={6}>
            <IconButton 
              icon={<RiDribbbleLine />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              height={10}
              aria-label='Dribbble Account'
            />
            <IconButton 
              icon={<RiInstagramLine />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              height={10}
              aria-label='Dribbble Account'
            />
            <IconButton 
              icon={<RiTwitterFill />}
              variant='ghost'
              rounded='full'
              color='gray.500'
              height={10}
              aria-label='Dribbble Account'
            />
          </HStack>
        </VStack>
      </Flex>
      <Box px={8} w='full'>
        <Divider color='gray.500' />
      </Box>
      <HStack px={8} w='full' justifyContent='space-between'>
        <Heading size='xs'>
          Friends online
        </Heading>
        <Text fontSize='sm' color='gray.500' fontWeight='semibold'>23</Text>
      </HStack>
      <HStack overflowX='auto' minH={24} px={8} w='full' justifyContent='flex-start' spacing={3}>
        {onlineFriends.map((friend) => (
          <UserAvatar name={friend} key={friend} />
        ))}
      </HStack>
      <Box px={8} w='full'>
        <Divider color='gray.100'>
        </Divider>
      </Box>
      <Box px={8} w='full'>
        <Heading size='xs'>Chats</Heading>
        <Input 
          variant='filled' 
          mt={2} minH={10} 
          rounded='full' 
          placeholder='Search chat' 
        />
      </Box>
      <Box width='full' overflowY='auto'>
        <List width='full' spacing={0}>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
          <ListItem>
            <ChatRow></ChatRow>
          </ListItem>
        </List>
      </Box>
    </VStack>
  ); 
}


const Chart = () => {
  return (
    <HStack height='100vh' spacing={0}>
      <Flex as='nav' h='full' maxW={16} w='full' bg='tomato'>
        <Navigation />
      </Flex>
      <Flex 
        as='aside' 
        h='full' 
        maxW='sm' 
        w='full' 
        borderRightColor='gray.100' 
        borderRightWidth={1}>
        <ChatHistorySidebar />
      </Flex>
      <Flex 
        as='main' 
        h='full' 
        flex={1} 
        borderRightColor='gray.100' 
        borderRightWidth={1} 
      >
        <Chat></Chat>
      </Flex>
      <Flex 
        as='aside' 
        h='full' 
        maxW='sm' 
        w='full'
      >
        <ChatFiles>

        </ChatFiles>
      </Flex>
    </HStack>
  ); 
}

export default Chart;
