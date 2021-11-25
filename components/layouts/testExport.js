// 25 NOV 2021 TRAN MINH HAI 
// ES6 Default export 
// export deafult OriginalExportName 
// import ImportName from 'module'. ImportName is the name that will be given
// locally to the variable assigned to contain the value, and it does not 
// have to be named like the origin export. There can be one default export. 

import { Box } from '@chakra-ui/react';

const TestExport = () => {
  return (
    <Box width={'100%'} bg={'tomato'} height={200}>

    </Box>
  )
}

export default TestExport