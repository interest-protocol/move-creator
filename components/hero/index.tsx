import { Motion } from '@interest-protocol/ui-kit';
import { Div, H2, P, Span } from '@stylin.js/elements';
import type { FC } from 'react';
import toast from 'react-hot-toast';

import { CA } from '../../constants';
import BuyNow from '../buy-now';
import { CopySVG } from '../svg';

const Hero: FC = () => (
  <Motion
    p="3rem"
    mt="-6rem"
    gap="2rem"
    height="100vh"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ delay: 4.25, duration: 0.5, ease: 'easeOut' }}
  >
    <H2
      color="#fff"
      maxWidth="20.2ch"
      fontSize="7vw"
      fontWeight="400"
      textAlign="center"
    >
      {"Let's"} set the record straight, I am the Creator of Move!
    </H2>
    <Div
      p="1rem"
      gap="1rem"
      bg="#ffffff11"
      display="flex"
      color="#ffffff"
      cursor="pointer"
      onClick={() => {
        window.navigator.clipboard.writeText(CA);
        toast('Copied!');
      }}
      alignItems="center"
      justifySelf="center"
      borderRadius="3rem"
      justifyContent="center"
      backdropFilter="blur(7.5px)"
    >
      <P display="flex">
        <Span
          display="flex"
          textAlign="left"
          overflow="hidden"
          justifyContent="flex-start"
          maxWidth={['7ch', '7ch', '12ch']}
          fontFamily="monospace, monospace"
        >
          {CA}
        </Span>
        <Span fontFamily="monospace, monospace">...</Span>
        <Span
          display="flex"
          maxWidth="12ch"
          overflow="hidden"
          justifyContent="flex-end"
          fontFamily="monospace, monospace"
        >
          {CA}
        </Span>
      </P>
      <CopySVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Div>
    <BuyNow all="unset" px="4rem" py="0.825rem" justifySelf="end" />
  </Motion>
);

export default Hero;
