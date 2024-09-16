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
      'Sam-a-suicun1',
      'Sam-on-bar',
      'Sam-on-bar2',
      'Sam-retardo',
      'Sam-rich1',
      'Sam-simple-cryorange',
      'Sam-simple-sandwish2',
      'Sam-sstrong-man',
      'Samsurf1',
    ].map((name) => (
      <Div key={unikey()}>
        <Img
          mx="1rem"
          alt={name}
          width="10rem"
          borderRadius="0.75rem"
          src={`/img/${name}-min.webp`}
        />
      </Div>
    ))}
  </Slider>
);

export default Memes;
