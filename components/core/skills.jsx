import { GridItem, Flex, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import LinkButton from "../utils/linkButton"
import HomeText from "../utils/homeText"
import SkillCard from "../utils/skillCard"
import { useScreenWidth } from "../../hooks/screenBreak"

const skills = [
  {
    imageURL:
      "https://rabbithole-assets.s3.amazonaws.com/lp/flying-cash-emoji.png",
    progress: 1,
    totalProgress: 3,
    headingText: "Asset Manager",
    bodyText:
      "Learn how to become a treasury manager on the most popular DeFi protocols.",
  },
  {
    imageURL: "https://rabbithole-assets.s3.amazonaws.com/lp/art-emoji.png",
    progress: 1,
    totalProgress: 3,
    headingText: "NFT Creator",
    bodyText:
      "Learn how to become an NFT artist and start making money from your digital creations.",
  },
  {
    imageURL: "https://rabbithole-assets.s3.amazonaws.com/lp/globe-emoji.png",
    progress: 2,
    totalProgress: 3,
    headingText: "Explorer",
    bodyText:
      "Explore the depths of the crypto ecosystem and learn the foundations.",
  },
]

const Skills = () => {
  let [isLargerThan975] = useScreenWidth(975)

  return (
    <SimpleGrid
      columns={isLargerThan975 ? 2 : 1}
      bg='gray.800'
      minH='95vh'
      overflow='hidden'
    >
      <Flex flexDir='column' w='full' flexWrap='wrap'>
        {skills.map((skill) => {
          return <SkillCard key={skill.headingText} {...skill} />
        })}
      </Flex>
      <GridItem
        pt='20'
        rowStart={!isLargerThan975 && 1}
        p={!isLargerThan975 && 16}
      >
        <HomeText
          headingTextColor='Gain skills'
          headingText='for participating in the new digital economy'
          informativeText='Earn an on-chain credential which shows your mastery of new technologies.'
        >
          <LinkButton variant='solid'>Explore all skills</LinkButton>
        </HomeText>
      </GridItem>
    </SimpleGrid>
  )
}

export default Skills
