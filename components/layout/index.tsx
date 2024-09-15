import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main position="relative">{children}</Main>
);

export default Layout;
