import { Motion } from '@interest-protocol/ui-kit';
import { A, Button, Div, H1, Header, Img, Nav } from '@stylin.js/elements';
import { type FC } from 'react';

const TopBar: FC = () => (
  <Motion
    top="0"
    width="100vw"
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    position={['static', 'static', 'sticky']}
    transition={{ delay: 3.5, duration: 0.5, ease: 'linear' }}
  >
    <Header
      display="grid"
      alignItems="center"
      p={['1.5rem 1rem', '3rem']}
      gridTemplateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      <Div gap="1rem" display="flex" alignItems="center">
        <Img src="/icon.png" width="3rem" alt="Move Creator" />
        <H1 fontSize="1.25rem" color="white" fontWeight="500">
          Move Creator
        </H1>
      </Div>
      <Nav
        py="1rem"
        px="2rem"
        gap="2rem"
        bg="#ffffff11"
        color="#ffffff"
        alignItems="center"
        justifySelf="center"
        borderRadius="3rem"
        justifyContent="center"
        backdropFilter="blur(7.5px)"
        display={['none', 'none', 'flex']}
      >
        <A
          target="_blank"
          rel="noreferrer"
          nHover={{ color: '#9FECFE' }}
          href="https://x.com/MoveCreator"
        >
          X
        </A>
        <A
          target="_blank"
          rel="noreferrer"
          nHover={{ color: '#9FECFE' }}
          href="http://t.me/RealMoveCreator"
        >
          Telegram
        </A>
        <A
          target="_blank"
          rel="noreferrer"
          nHover={{ color: '#9FECFE' }}
          href="https://drive.google.com/drive/folders/1I_wiUHcAoqCL_l2R5uL7Vct5y0BwZm8Y?usp=sharing"
        >
          Memes
        </A>
      </Nav>
      <Button
        all="unset"
        px="1.5rem"
        py="0.825rem"
        bg="#9FECFE"
        cursor="pointer"
        fontWeight="600"
        justifySelf="end"
        borderRadius="0.625rem"
      >
        Buy now
      </Button>
    </Header>
    <Div display="flex" justifyContent="center">
      <Nav
        py="1rem"
        px="2rem"
        gap="2rem"
        width="auto"
        bg="#ffffff11"
        color="#ffffff"
        alignItems="center"
        borderRadius="3rem"
        justifyContent="center"
        backdropFilter="blur(7.5px)"
        display={['flex', 'flex', 'none']}
      >
        <A
          target="_blank"
          rel="noreferrer"
          nHover={{ color: '#9FECFE' }}
          href="https://x.com/MoveCreator"
        >
          X
        </A>
        <A
          target="_blank"
          rel="noreferrer"
          href="http://t.me/RealMoveCreator"
          nHover={{ color: '#9FECFE' }}
        >
          Telegram
        </A>
        <A
          target="_blank"
          rel="noreferrer"
          nHover={{ color: '#9FECFE' }}
          href="https://drive.google.com/drive/folders/1I_wiUHcAoqCL_l2R5uL7Vct5y0BwZm8Y?usp=sharing"
        >
          Memes
        </A>
      </Nav>
    </Div>
  </Motion>
);

export default TopBar;
