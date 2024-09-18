import { Global } from '@emotion/react';
import { lightTheme } from '@interest-protocol/ui-kit';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          border: '1px solid',
          borderRadius: lightTheme.radii.m,
          color: lightTheme.colors.onSurface,
          background: lightTheme.colors.surface,
          borderColor: lightTheme.colors.onPrimaryContainer,
        },
      }}
    />
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
