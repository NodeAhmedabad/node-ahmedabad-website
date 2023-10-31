'use client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'
import Contributors from '../components/Contributors/Contributors'
// import UpcomingEvent from '../components/UpcomingEvent/UpcomingEvent'

const theme = {
  colors: {
    primaryColor: '#68A063',
    secondaryColor: '#303030',
    thirdColor: '#ffffff',
    backupColor: '#3C873A',
    greenColor: '#29af8a',
    grayColor: '#f7f7f7',
    secondaryDarkColor: '#252525',
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
        <UpcomingEvents />
        <Contributors />
        {/* <UpcomingEvent /> */}
        <Footer />
      </main>
    </ThemeProvider>
  )
}
