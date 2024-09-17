import { NextPage } from 'next';

import { Background, MuteButton, SEO } from '@/components';
import Home from '@/views/home';

const HomePage: NextPage = () => (
  <>
    <SEO />
    <Background />
    <Home />
    <MuteButton />
  </>
);

export default HomePage;
