import {
  Image,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  Link,
} from "@chakra-ui/react"
import React from "react"
import { useScreenWidth } from "../../hooks/screenBreak"

const companiesFooter = [
  {
    name: "careers",
    href: "https://jobs.lever.co/RabbitHoleStudios",
  },
  {
    name: "blog",
    href: "https://www.notion.so/RabbitHole-9bf3d9a094974730bb2fae2b992ee1c9",
  },
  {
    name: "terms of service",
    href: "https://rabbithole-assets.s3.amazonaws.com/RabbitHole_Terms_of_Service.pdf",
  },
  {
    name: "privacy policy",
    href: "https://rabbithole-assets.s3.amazonaws.com/RabbitHole_Privacy_Policy.pdf",
  },
]

const supportFooter = [
  {
    name: "FAQ",
    href: "https://discord.gg/HqPWswAwZH",
  },
  {
    name: "contact support",
    href: "https://discord.gg/eeRKzPkZ9f",
  },
]

const socialFooter = [
  {
    name: "discord",
    href: "https://discord.gg/V7WMqbs",
  },
  {
    name: "twitter",
    href: "https://twitter.com/rabbithole_gg",
  },
  {
    name: "mirror",
    href: "https://rabbithole.mirror.xyz/",
  },
]

const FootSection = () => {
  let [isLargerThan975] = useScreenWidth(975)
  return (
    <Flex
      bg='gray.800'
      py='16'
      px='8'
      flexDir={isLargerThan975 ? "row" : "column"}
    >
      <Flex
        flexGrow={1}
        flexBasis='50%'
        justifyContent='center'
        alignItems='center'
        pb={isLargerThan975 ? "0" : "4"}
      >
        <Heading fontSize='6xl'>
          <Text as='span' color='green.300'>
            Rabbit
          </Text>
          <Text as='span' color='whiteAlpha.600'>
            Hole
          </Text>
        </Heading>
        <Image
          src='/rabbithole_logo.png'
          alt='rabbithole logo'
          boxSize='70px'
        />
      </Flex>
      <Flex
        flexGrow={1}
        flexBasis='50%'
        justifyContent={isLargerThan975 ? "flex-start" : "center"}
      >
        <Box pr='12'>
          <Heading color='white' fontSize='xl'>
            Company
          </Heading>
          <List>
            {companiesFooter.map((c) => {
              return (
                <ListItem
                  color='whiteAlpha.600'
                  pt='6'
                  key={c.name}
                  textTransform='capitalize'
                >
                  <Link href={c.href}>{c.name}</Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box pr='12'>
          <Heading color='white' fontSize='xl'>
            Support
          </Heading>
          <List>
            {supportFooter.map((c) => {
              return (
                <ListItem
                  color='whiteAlpha.600'
                  pt='6'
                  key={c.name}
                  textTransform='capitalize'
                >
                  <Link href={c.href}>{c.name}</Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box>
          <Heading color='white' fontSize='xl'>
            Social
          </Heading>
          <List>
            {socialFooter.map((c) => {
              return (
                <ListItem
                  color='whiteAlpha.600'
                  pt='6'
                  key={c.name}
                  textTransform='capitalize'
                >
                  <Link href={c.href}>{c.name}</Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Flex>
    </Flex>
  )
}

export default FootSection
