import { css } from '@emotion/react';

export const TerminalGlobalStyles = css`
  @font-face {
    font-family: 'Proto';
    src: url('https://suicoins.com/fonts/proto/ProtoMono-Regular.eot');
    src:
      local('Proto Mono Regular'),
      local('ProtoMono-Regular'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Regular.woff2')
        format('woff2'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Regular.woff')
        format('woff'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Regular.ttf')
        format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proto';
    src: url('https://suicoins.com/fonts/proto/ProtoMono-Medium.eot');
    src:
      local('Proto Mono Medium'),
      local('ProtoMono-Medium'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Medium.eot?#iefix')
        format('embedded-opentype'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Medium.woff2')
        format('woff2'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Medium.woff')
        format('woff'),
      url('https://suicoins.com/fonts/proto/ProtoMono-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://suicoins.com/fonts/satoshi/Satoshi-Medium.woff2')
        format('woff2'),
      url('https://suicoins.com/fonts/satoshi/Satoshi-Medium.woff')
        format('woff'),
      url('https://suicoins.com/fonts/satoshi/Satoshi-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://suicoins.com/fonts/satoshi/Satoshi-Bold.woff2')
        format('woff2'),
      url('https://suicoins.com/fonts/satoshi/Satoshi-Bold.woff') format('woff'),
      url('https://suicoins.com/fonts/satoshi/Satoshi-Bold.ttf')
        format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi';
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
