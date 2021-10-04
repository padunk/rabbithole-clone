import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { useScreenWidth } from "../../hooks/screenBreak"

const HomeText = ({
  headingTextColor,
  headingText,
  informativeText,
  children,
  headingTextAtEnd,
}) => {
  let [isLargerThan975] = useScreenWidth(975)

  return (
    <Box
      w={isLargerThan975 ? "400px" : "full"}
      textAlign='left'
      letterSpacing='tighter'
      lineHeight='shorter'
    >
      <Heading
        as='h2'
        fontSize='5xl'
        py='2'
        letterSpacing='tighter'
        fontWeight='semibold'
      >
        {!headingTextAtEnd && (
          <Text as='span' color='green.300'>
            {headingTextColor}{" "}
          </Text>
        )}
        <Text color='whiteAlpha.800'>{headingText}</Text>
        {headingTextAtEnd && (
          <Text as='span' color='green.300'>
            {headingTextColor}{" "}
          </Text>
        )}
      </Heading>
      <Text color='whiteAlpha.600' fontSize='xl' py='2' lineHeight='tall'>
        {informativeText}
      </Text>
      <Flex fontSize='xl' justifyContent='flex-start' w='full' py='2'>
        {children}
      </Flex>
    </Box>
  )
}

export default HomeText
