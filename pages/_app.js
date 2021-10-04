import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "../chakra/fonts"
import theme from "../chakra/theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
