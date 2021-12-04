// 04 DEC 2021 TRAN MINH HAI chat 
import {Text,
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
      </Flex>
    </Flex>
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
        bg='gray.100'>
        <Chat></Chat>
      </Flex>
      <Flex 
        as='aside' 
        h='full' 
        maxW='sm' 
        w='full' />
    </HStack>
  ); 
}

export default Chart;
