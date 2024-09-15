import { Motion } from '@interest-protocol/ui-kit';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout, PageContent } from '@/components';

const Home: FC = () => (
  <Layout>
    <Motion
      width="100vw"
      height="100vh"
      overflowY="auto"
      overflowX="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      transition={{ duration: 3, ease: 'linear' }}
    >
      <PageContent />
      <Div minHeight="100vh" />
    </Motion>
  </Layout>
);

export default Home;
