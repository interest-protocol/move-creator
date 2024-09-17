import { Video, VideoElementProps } from '@stylin.js/elements';
import { forwardRef } from 'react';

const Background = forwardRef<VideoElementProps>((_, ref) => (
  <Video
    loop
    muted
    autoPlay
    playsInline
    ref={ref}
    width="100vw"
    height="100vh"
    controls={false}
    objectFit="cover"
    position="absolute"
    src="/video/bg.webm"
  />
));

Background.displayName = 'Background';

export default Background;
