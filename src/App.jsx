import { ChakraProvider } from "@chakra-ui/react"
import Rotas from "./routes"


function App() {
  return (
    <ChakraProvider>
      <Rotas />
    </ChakraProvider>
  )
}

export default App
