import { Box, SimpleGrid, Flex, Text } from "@chakra-ui/react"
import React from "react"
import HomeText from "../utils/homeText"
import LinkButton from "../utils/linkButton"

const ProjectPartner = () => {
  return (
    <Flex flexWrap='wrap' w='full'>
      <Box bgColor='gray.700' flexGrow={1} py='16' px='24'>
        <Flex justifyContent='space-between' w='full'>
          <Box fontSize='3xl'>
            <Text as='span' color='white'>
              for{" "}
            </Text>
            <Text as='span' color='whiteAlpha.600' fontWeight='semibold'>
              Projects
            </Text>
          </Box>
          <Box>
            <Text as='span' fontSize='5xl'>
              🚀
            </Text>
          </Box>
        </Flex>
        <HomeText
          headingTextAtEnd={true}
          headingTextColor='contributors'
          headingText="Find your project's"
          informativeText='Use RabbitHole to attract new users and stakeholders for your community. RabbitHole allows projects to distribute tokens to users through proof-of-use.'
        >
          <LinkButton
            variant='solid'
            href='https://airtable.com/shrxNsukRhFpv7cRK'
          >
            Reach out
          </LinkButton>
          <LinkButton
            variant='ghost'
            href='https://www.notion.so/RabbitHole-Campaign-Overview-02d66a6956d94d6eb5bc10f3bb9fada8'
            ml='4'
          >
            More details
          </LinkButton>
        </HomeText>
      </Box>
      <Box bgColor='gray.900' flexGrow={1} py='16' px='24'>
        <Flex justifyContent='space-between' w='full'>
          <Box fontSize='3xl'>
            <Text as='span' color='white'>
              for{" "}
            </Text>
            <Text as='span' color='whiteAlpha.600' fontWeight='semibold'>
              Partners
            </Text>
          </Box>
          <Box>
            <Text as='span' fontSize='5xl'>
              🤝
            </Text>
          </Box>
        </Flex>
        <HomeText
          headingTextColor='Help educate'
          headingText='new cryptocitizens'
          informativeText="If you're a community that's looking to educate your members on crypto applications, reach out to us ondiscord to discuss how we can work together."
        >
          <LinkButton
            variant='solid'
            href='https://discord.gg/V7WMqbs'
            customBG='purple.500'
            customColor='white'
          >
            Join Discord
          </LinkButton>
        </HomeText>
      </Box>
    </Flex>
  )
}

export default ProjectPartner
