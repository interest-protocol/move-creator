import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout, PageContent } from '@/components';

const Home: FC = () => (
  <Layout>
    <Motion
      width="100vw"
      height="100vh"
      overflowY="auto"
      initial={{ opacity: 0 }}
      backdropFilter="blur(11px)"
      animate={{ opacity: [0, 0, 1] }}
      transition={{ duration: 3, ease: 'linear' }}
    >
      <PageContent />
    </Motion>
  </Layout>
);

export default Home;
