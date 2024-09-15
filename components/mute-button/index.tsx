import { Motion } from '@interest-protocol/ui-kit';
import { Button } from '@stylin.js/elements';
import { type FC, useState } from 'react';

import { MutedSVG, UnmutedSVG } from '../svg';
import type { MuteButtonProps } from './mute-button.types';

const MuteButton: FC<MuteButtonProps> = ({ videoRef }) => {
  const [muted, setMuted] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      if (firstTime) setFirstTime(false);
      setMuted(!videoRef.current.muted);
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <Motion
      right="2rem"
      bottom="2rem"
      position="fixed"
      initial={{ scale: 1, x: 0 }}
      animate={{
        scale: muted ? [1, 1.5, 1] : [1],
        x:
          firstTime && muted
            ? [
                1, -1, 1, -1, 1, 1, -1, 1, -1, 1, -2, 2, -2, 2, -3, 3, -3, 3,
                -3, 3, -2, 2, 2, -2, 2, -2, 1, -1, 1, -1, 1, -1, 1, -1,
              ]
            : [0],
      }}
      transition={{ duration: 3, repeat: Infinity }}
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
        onClick={toggleMute}
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
  );
};

export default MuteButton;
