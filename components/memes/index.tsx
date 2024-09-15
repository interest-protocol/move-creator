import { Div, Img } from '@stylin.js/elements';
import type { FC } from 'react';
import Slider from 'react-slick';
import unikey from 'unikey';

const Memes: FC = () => (
  <Slider infinite autoplay slidesToShow={6} slidesToScroll={1} arrows={false}>
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
          src={`/img/${name}`}
          alt="Sam fun"
          width="10rem"
          borderRadius="0.75rem"
        />
      </Div>
    ))}
  </Slider>
);

export default Memes;
