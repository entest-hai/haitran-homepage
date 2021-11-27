import React from 'react'
import {
  Button, 
  Input, 
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon } from '@chakra-ui/icons'

export const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme={'teal'}
        aral-label="drawer-menu"
        icon={<HamburgerIcon></HamburgerIcon>}
      >

      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}