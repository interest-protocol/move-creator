import { Video, VideoElementProps } from '@stylin.js/elements';
import { forwardRef } from 'react';

const Background = forwardRef<VideoElementProps>((_, ref) => (
  <Video
    loop
    muted
    autoPlay
    ref={ref}
    width="100vw"
    height="100vh"
    objectFit="cover"
    position="absolute"
    src="/video/bg.webm"
  />
));

Background.displayName = 'Background';

export default Background;
