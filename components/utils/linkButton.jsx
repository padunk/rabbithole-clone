import { Link } from "@chakra-ui/react"
import React from "react"

const LinkButton = ({
  children,
  href,
  variant,
  customBG,
  customColor,
  ...props
}) => {
  const bg =
    variant === "solid" ? (customBG ? customBG : "green.400") : "whiteAlpha.100"
  const color =
    variant === "solid" ? (customColor ? customColor : "black") : "green.300"

  return (
    <Link
      href={href}
      color={color}
      bg={bg}
      py='2'
      px='4'
      borderRadius='xl'
      isExternal={true}
      fontWeight='bold'
      fontSize='md'
      _hover={variant !== "solid" && { bg: "whiteAlpha.400" }}
      {...props}
    >
      {children}
    </Link>
  )
}

export default LinkButton
