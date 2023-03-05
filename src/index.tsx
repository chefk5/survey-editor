import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './styles/theme'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
)
