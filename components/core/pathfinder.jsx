import { Box, Flex, Link, Text } from "@chakra-ui/react"
import React from "react"
import { useScreenWidth } from "../../hooks/screenBreak"

const Pathfinder = () => {
  let [isLargerThan975] = useScreenWidth(975)
  return (
    <Box as='section' bgColor='gray.800' p='20'>
      <Flex
        justifyContent='space-around'
        alignItems={isLargerThan975 ? "center" : "flex-start"}
        color='white'
        borderRadius='xl'
        bgColor='blackAlpha.500'
        p={isLargerThan975 ? "16" : "8"}
        pos='relative'
        zIndex={1}
        overflow='hidden'
        flexDir={isLargerThan975 ? "row" : "column"}
        _before={{
          content: '""',
          backgroundImage: "url(/rh-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Box pos='absolute' inset='0' bgColor='blackAlpha.500' zIndex={-1} />
        <Box>
          <Text color='whiteAlpha.600'>Introducing</Text>
          <Text
            color='whiteAlpha.800'
            fontSize='5xl'
            letterSpacing='tighter'
            fontWeight='semibold'
          >
            Pathfinder
          </Text>
        </Box>
        <Box
          px={isLargerThan975 ? "8" : "0"}
          my={isLargerThan975 ? "0" : "12"}
          fontSize='2xl'
        >
          Work for RabbitHole by writing proposal, creating artwork, or
          developing subgraphs and earn unique rewards.
        </Box>
        <Box mt={isLargerThan975 ? "0" : "4"}>
          <Link
            bgColor='white'
            color='pink.400'
            borderRadius='2xl'
            whiteSpace='nowrap'
            py='2'
            px='4'
            fontWeight='bold'
            _hover={{
              backgroundColor: "whiteAlpha.300",
            }}
          >
            Learn more
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Pathfinder
