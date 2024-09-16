import { Div, Img } from '@stylin.js/elements';
import type { FC } from 'react';
import Slider from 'react-slick';
import unikey from 'unikey';

const Memes: FC = () => (
  <Slider
    autoplay
    infinite
    centerMode
    dots={false}
    speed={2000}
    variableWidth
    arrows={false}
    cssEase="linear"
    slidesToScroll={1}
    autoplaySpeed={2000}
  >
    {[
      'Sam-a-suicun1-min.webp',
      'Sam-on-bar-min.webp',
      'Sam-on-bar2-min.webp',
      'Sam-retardo-min.webp',
      'Sam-rich1-min.webp',
      'Sam-simple-cryorange-min.webp',
      'Sam-simple-sandwish2-min.webp',
      'Sam-sstrong-man-min.webp',
      'Samsurf1-min.webp',
    ].map((name) => (
      <Div key={unikey()}>
        <Img
          mx="1rem"
          alt="Sam fun"
          width="10rem"
          src={`/img/${name}`}
          borderRadius="0.75rem"
        />
      </Div>
    ))}
  </Slider>
);

export default Memes;
