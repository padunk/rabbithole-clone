import {
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  Link,
  Image,
} from "@chakra-ui/react"
import React from "react"
import LinkButton from "../utils/linkButton"

const Header = () => {
  return (
    <Flex
      as='nav'
      height='100px'
      w='full'
      justifyContent='space-between'
      alignItems='center'
      pt='12'
      px='16'
    >
      <LinkBox>
        <LinkOverlay href='/'>
          <Image
            src='/rabbithole_logo.png'
            alt='rabbithole logo'
            boxSize='70px'
          />
        </LinkOverlay>
      </LinkBox>
      <LinkButton variant='ghost' href='/'>
        Use RabbitHole
      </LinkButton>
    </Flex>
  )
}

export default Header
