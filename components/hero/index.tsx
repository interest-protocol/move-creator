import { Motion } from '@interest-protocol/ui-kit';
import { Button, H2 } from '@stylin.js/elements';
import type { FC } from 'react';

const Hero: FC = () => (
  <Motion
    p="3rem"
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
      width="22ch"
      color="#fff"
      fontSize="7vw"
      fontWeight="400"
      textAlign="center"
    >
      {"Let's"} set the record straight, I am the Creator of Move!
    </H2>
    <Button
      all="unset"
      px="4rem"
      bg="#9FECFE"
      py="0.825rem"
      cursor="pointer"
      fontWeight="600"
      justifySelf="end"
      borderRadius="0.625rem"
    >
      Buy now
    </Button>
  </Motion>
);

export default Hero;
