import { FC } from 'react';

const Background: FC = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<video loop muted autoPlay id="video" playsInline src="/video/bg.webm" />`,
    }}
  />
);

export default Background;
