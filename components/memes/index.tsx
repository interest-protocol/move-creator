import { A, Div, Img } from '@stylin.js/elements';
import type { FC } from 'react';
import Slider from 'react-slick';
import unikey from 'unikey';

const Memes: FC = () => (
  <A
    display="block"
    target="_blank"
    rel="noreferrer"
    href="https://drive.google.com/drive/folders/1I_wiUHcAoqCL_l2R5uL7Vct5y0BwZm8Y?usp=sharing"
  >
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
        'banner-calm',
        'have-no-enemis',
        'learnig-all-the-moves',
        'meditation',
        'move-laguege',
        'PFP1',
        'sam-analysses',
        'sam-and-fesal',
        'sam-chill-beach',
        'sam-focus',
        'sam-river-master',
        'sam-surfpro',
        'sam-tea-houser',
        'sam-lin',
        'satoshi-training',
      ].map((name) => (
        <Div key={unikey()}>
          <Img
            mx="1rem"
            alt={name}
            width="10rem"
            height="10rem"
            objectFit="cover"
            borderRadius="0.75rem"
            src={`/img/${name}.webp`}
          />
        </Div>
      ))}
    </Slider>
  </A>
);

export default Memes;
