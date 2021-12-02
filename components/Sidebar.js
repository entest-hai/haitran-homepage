import { Avatar, Box, Divider, Heading, IconButton} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {FiMenu} from "react-icons/fi"


const Sidebar = () => {
  return (
    <Flex
      pos={'sticky'}
      left="5"
      height="95vh"
      marginTop="2.5vh"
      boxShadow="tomato"
      width="200px"
      flexDirection="column"
      justifyContent="space-between"
      bg="tomato"
    >
      <Flex
        p={"5%"}
        flexDirection="column"
        alignItems="flex-start"
        as="nav"
      >
        <IconButton
          bg="none"
          mt={5}
          _hover={{background: 'none'}}
          icon={<FiMenu />}
        >
          
        </IconButton>
      </Flex>
      <Flex
        p="5%"
        flexDirection="column"
        w="100%"
        alignItems="flex-start"
        mb={4}
      >
        <Divider />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex flexDirection="column" ml={4}>
            <Heading as="h3" size="sm">
              Hai Tran 
            </Heading>
          </Flex> 
        </Flex>
      </Flex>
      <Flex>
        
      </Flex>
    </Flex>
  );
}

export default Sidebar;
