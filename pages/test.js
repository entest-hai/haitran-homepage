import { useEffect, useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import { fetchJsonFromLocal } from "../services/LoadDataService"

const Test = () => {
    const [readingPassage, setReadingPassage] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchJsonFromLocal("")
            setReadingPassage(res[0])
        }
        fetchData()
    }, [])

    return (
        <Box sx={{width:"100%", bg:"tomato", height:"calc(100vh - 6rem)", overflow:"auto"}}>
            {readingPassage && <Text fontSize="2xl" fontWeight="bold" mb={3}>{readingPassage.title}</Text>}
            {readingPassage && <Text fontSize="lg" fontWeight="bold" mb={3}>{readingPassage.guide}</Text>}
            {readingPassage && readingPassage.paragraphs.map((content,index) => {
                return (
                   <Text key={index} mb={3}>
                       {content}
                   </Text>
                )
            })}
        </Box>
    )
}

export default Test
