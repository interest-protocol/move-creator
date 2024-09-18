import { Motion } from '@interest-protocol/ui-kit';
import { H2 } from '@stylin.js/elements';
import type { FC } from 'react';

import BuyNow from '../buy-now';

const Hero: FC = () => (
  <Motion
    p="3rem"
    mt="-6rem"
    gap="4rem"
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
      width="20.5ch"
      fontSize="7vw"
      fontWeight="400"
      textAlign="center"
    >
      {"Let's"} set the record straight, I am the Creator of Move!
    </H2>
    <BuyNow all="unset" px="4rem" py="0.825rem" justifySelf="end" />
  </Motion>
);

export default Hero;
