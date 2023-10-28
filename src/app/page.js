'use client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Cards from './components/Cards/Cards'

const theme = {
  colors: {
    primaryColor: '#68A063',
    secondaryColor: '#303030',
    thirdColor: '#ffffff',
    backupColor: '#3C873A',
  },
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Main />
        <Cards />
      </main>
    </ThemeProvider>
  )
}
