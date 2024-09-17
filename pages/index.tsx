import { NextPage } from 'next';
import { useRef } from 'react';

import { Background, MuteButton, SEO } from '@/components';
import Home from '@/views/home';

const HomePage: NextPage = () => {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <>
      <SEO />
      <Background ref={ref} />
      <Home />
      <MuteButton videoRef={ref} />
    </>
  );
};

export default HomePage;
