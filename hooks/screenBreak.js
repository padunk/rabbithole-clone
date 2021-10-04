import { useMediaQuery } from "@chakra-ui/react"
import * as React from "react"

export const useScreenWidth = (width) => {
  let [isWidth, setIsWidth] = React.useState(false)
  const [isLargerThan] = useMediaQuery(`(min-width: ${width}px)`)

  React.useEffect(() => {
    if (window !== undefined) {
      setIsWidth(isLargerThan)
    }
  }, [isLargerThan])

  return [isWidth]
}
