import { Motion } from '@interest-protocol/ui-kit';
import { Button, Div, P } from '@stylin.js/elements';
import { type FC, useState } from 'react';

import { MutedSVG, UnmutedSVG } from '../svg';
import type { MuteButtonProps } from './mute-button.types';

const MuteButton: FC<MuteButtonProps> = ({ videoRef }) => {
  const [muted, setMuted] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      setMuted(!videoRef.current.muted);
      videoRef.current.muted = !videoRef.current.muted;
      if (firstTime) setFirstTime(false);
    }
  };

  return (
    <Div
      gap="1rem"
      right="2rem"
      bottom="2rem"
      display="flex"
      position="fixed"
      alignItems="center"
      onClick={toggleMute}
    >
      {firstTime && (
        <P px="1rem" py="0.75rem" bg="#fff" borderRadius="0.5rem">
          Sound ON
        </P>
      )}
      <Motion
        initial={{ scale: 1, x: 0 }}
        transition={{ duration: 3, repeat: Infinity }}
        animate={{
          scale: muted ? [1, 1.2, 1] : [1],
          x:
            firstTime && muted
              ? [
                  1, -1, 1, -1, 1, 1, -1, 1, -1, 1, -2, 2, -2, 2, -3, 3, -3, 3,
                  -3, 3, -2, 2, 2, -2, 2, -2, 1, -1, 1, -1, 1, -1, 1, -1,
                ]
              : [0],
        }}
      >
        <Button
          all="unset"
          width="3rem"
          height="3rem"
          color="white"
          display="flex"
          cursor="pointer"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          backdropFilter="blur(5px)"
          boxShadow="0px 1.2px 29.92px 0px #452A7C1A"
          bg="linear-gradient(86.16deg, rgba(255, 255, 255, 0.2) 11.14%, rgba(255, 255, 255, 0.035) 113.29%)"
        >
          {muted ? (
            <MutedSVG maxHeight="1rem" maxWidth="1rem" height="100%" />
          ) : (
            <UnmutedSVG maxHeight="1rem" maxWidth="1rem" height="100%" />
          )}
        </Button>
      </Motion>
    </Div>
  );
};

export default MuteButton;
