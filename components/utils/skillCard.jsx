import { Box, Flex, Image, Text, CircularProgress } from "@chakra-ui/react"
import React from "react"

const SkillCard = ({
  imageURL,
  progress,
  totalProgress,
  headingText,
  bodyText,
}) => {
  return (
    <Box
      bg='gray.700'
      borderRadius='3xl'
      w='350px'
      minW='300px'
      color='white'
      py='4'
      px='8'
      mx='auto'
      mb='8'
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Box w='40px'>
          <Image src={imageURL} alt='icon' />
        </Box>
        <Box>
          <CircularProgress
            value={(progress / totalProgress) * 100}
            color='green.300'
            size='40px'
            thickness='6px'
          />
          <Text as='span'>
            {" "}
            {progress}
            <Text as='span' color='whiteAlpha.600'>
              {" "}
              of{" "}
            </Text>
            {totalProgress}
          </Text>
        </Box>
      </Flex>
      <Text fontSize='3xl' fontWeight='semibold'>
        {headingText}
      </Text>
      <Text color='whiteAlpha.800' fontSize='lg'>
        {bodyText}
      </Text>
    </Box>
  )
}

export default SkillCard
