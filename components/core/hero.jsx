import React from "react"
import Header from "./header"
import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import LinkButton from "../utils/linkButton"
import HomeText from "../utils/homeText"
import { useScreenWidth } from "../../hooks/screenBreak"

const Hero = () => {
  let [isLargerThan975] = useScreenWidth(975)

  return (
    <div className='hero-section'>
      <Header />
      <SimpleGrid
        h={isLargerThan975 && "calc(100% - 100px)"}
        columns={isLargerThan975 ? 2 : 1}
        bgGradient='linear(to-b, transparent 60%, rgba(0, 0, 0, 0.7))'
      >
        <Flex
          justifyContent='flex-end'
          alignItems='center'
          mt={isLargerThan975 ? "-12" : "0"}
          mr={isLargerThan975 ? "32" : "0"}
          px={isLargerThan975 ? "0" : "8"}
        >
          <HomeText
            headingTextColor='Earn crypto'
            headingText='by using the latest decentralized apps'
            informativeText='Become an early adopter of new projects, and earn crypto as a reward'
          >
            <LinkButton variant='solid' href='/'>
              Use RabbitHole
            </LinkButton>
            <LinkButton variant='ghost' href='/' ml='4'>
              View Opportunities
            </LinkButton>
          </HomeText>
        </Flex>
        <Flex
          justifyContent={isLargerThan975 ? "flex-start" : "center"}
          alignItems='center'
          mt='10'
        >
          <LinkBox w='lg' bg='gray.800' borderRadius='2xl' overflow='hidden'>
            <LinkOverlay href='https://zora.co/0x2525f1a08a2d5f037dda969f2fa1b56e4b4b47f3/3724'>
              <Box>
                <video
                  src='https://ipfs.fleek.co/ipfs/bafybeia5pgu57ztxbdyd5ifonrojyqupmfhrdqoqnmesesiwckkvuwjvbq'
                  autoPlay
                  loop
                  muted
                ></video>
              </Box>
              <Box color='white' px='8' py='4'>
                <Text>The Power of Curiosity</Text>
                <Text>
                  <Text as='span' color='whiteAlpha.600'>
                    Created by{" "}
                  </Text>
                  0x2525f1...4b47f3
                </Text>
              </Box>
            </LinkOverlay>
          </LinkBox>
        </Flex>
      </SimpleGrid>
    </div>
  )
}

export default Hero
