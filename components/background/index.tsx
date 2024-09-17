import { forwardRef } from 'react';

const Background = forwardRef<HTMLVideoElement>((_, ref) => (
  <video
    loop
    muted
    autoPlay
    ref={ref}
    playsInline
    controls={false}
    src="/video/bg.webm"
  />
));

Background.displayName = 'Background';

export default Background;
