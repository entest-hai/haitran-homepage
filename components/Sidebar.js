// 03 DEC 2021 TRAN MINH HAI Build Sidebar collapsable

import { Avatar, Flex, Divider, Heading, IconButton, Menu, Link, MenuButton, Icon, Text} from '@chakra-ui/react';
import {useState} from 'react';
import { FiBriefcase, FiCalendar, FiDollarSign, FiHome, FiMenu, FiSettings, FiUser } from 'react-icons/fi';


const NavItem = ({navSize, title, icon, active}) => {
  return (
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement='right'>
        <Link
          bg={active && '#AEC8CA'}
          p={3}
          borderRadius={8}
          _hover={{textDecor: 'none', bg: '#AEC8CA'}}
          width={navSize == 'large' && '100%'}
        >
          <MenuButton width={'100%'}>
            <Flex>
              <Icon as={icon} fontSize='xl' color={active ? '#82AAAD' : 'gray.500'}></Icon>
              <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

const Sidebar = () => {

  const [navSize, changeNavSize] = useState('large')

  return (
    <Flex
      pos={'sticky'}
      left='5'
      height='95vh'
      marginTop='2.5vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize == 'small' ? '15px' : '30px'}
      width={navSize == 'small' ? '75px' : '200px'}
      flexDirection='column'
      justifyContent='space-between'
    >
      <Flex
        p={'5%'}
        flexDirection="column"
        alignItems="flex-start"
        as="nav"
        
      >
        <IconButton
          bg="none"
          mt={5}
          _hover={{background: 'none'}}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == 'small')
              changeNavSize('large')
            if (navSize == 'large')
              changeNavSize('small')
          }}
        >
          
        </IconButton>
        <NavItem navSize={navSize} icon={FiHome} title={'Dashboard'}/>
        <NavItem navSize={navSize} icon={FiCalendar} title='Calendar'/>
        <NavItem navSize={navSize} icon={FiUser} title='Clients'/>
        <NavItem navSize={navSize} icon={FiDollarSign} title='Stocks'/>
        <NavItem navSize={navSize} icon={FiBriefcase} title='Reports'/>
        <NavItem navSize={navSize} icon={FiSettings} title='Settings'/>

      </Flex>
      <Flex
        p="5%"
        flexDirection="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize == 'small' ? 'none' : 'flex' }/>
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex flexDirection="column" ml={4} display={navSize == 'small' ? 'none' : 'flex'}>
            <Heading as="h3" size="sm">
              Hai Tran 
            </Heading>
          </Flex> 
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
