import { Flex } from "@chakra-ui/react"
import React from "react"
import FootSection from "./footSection"

const Layout = ({ children }) => {
  return (
    <Flex flexDir='column'>
      {children}
      <FootSection />
    </Flex>
  )
}

export default Layout
