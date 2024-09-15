import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import Content from '../content';
import Hero from '../hero';
import TopBar from '../top-bar';

const PageContent: FC = () => (
  <Div backdropFilter="blur(11px)" position="relative">
    <TopBar />
    <Hero />
    <Content />
  </Div>
);

export default PageContent;
