import React from 'react';
import Header from '@/shared/Header/Header';
import Main from '@/components/home/Main/Main';
import Cards from '@/components/home/Cards/Cards';
import Footer from '@/shared/Footer/Footer';
import UpcomingEvents from '@/components/home/UpcomingEvents/UpcomingEvents';
import Contributors from '@/components/home/Contributors/Contributors';

const Home = () => {
  return (
    <main>
      <Header />
      <Main />
      <Cards />
      <UpcomingEvents />
      <Contributors />
      <Footer />
    </main>
  );
};

export default Home;
