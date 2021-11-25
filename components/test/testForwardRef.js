// 25 NOV 2021 TRAN MINH HAI 
// test useRef and forwardRef 

import { Box } from '@chakra-ui/react';
import { forwardRef, useRef, useEffect } from 'react';

const  TestChildForwardRef = forwardRef(({children}, ref) => (
  <Box
    ref={ref}
    bg={'tomato'}
    width={'100%'}
    height={200}
  >
    {children}
  </Box>
))


const TestParentForwardRef = () => {
  const ref = useRef()

  useEffect(() => {
    const {current: container} = ref
    console.log('child container ', container.style.height)
    container.style.width = '100px'

  }, [])

  return (
    <TestChildForwardRef
      ref={ref}
    >
      Hai Tran
    </TestChildForwardRef>
  )
}

export default TestParentForwardRef
