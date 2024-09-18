import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Proto';
    src: url('/fonts/proto/ProtoMono-Regular.eot');
    src:
      local('Proto Mono Regular'),
      local('ProtoMono-Regular'),
      url('/fonts/proto/ProtoMono-Regular.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/proto/ProtoMono-Regular.woff2') format('woff2'),
      url('/fonts/proto/ProtoMono-Regular.woff') format('woff'),
      url('/fonts/proto/ProtoMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proto';
    src: url('/fonts/proto/ProtoMono-Medium.eot');
    src:
      local('Proto Mono Medium'),
      local('ProtoMono-Medium'),
      url('/fonts/proto/ProtoMono-Medium.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/proto/ProtoMono-Medium.woff2') format('woff2'),
      url('/fonts/proto/ProtoMono-Medium.woff') format('woff'),
      url('/fonts/proto/ProtoMono-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('/fonts/satoshi/Satoshi-Medium.woff2') format('woff2'),
      url('/fonts/satoshi/Satoshi-Medium.woff') format('woff'),
      url('/fonts/satoshi/Satoshi-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('/fonts/satoshi/Satoshi-Bold.woff2') format('woff2'),
      url('/fonts/satoshi/Satoshi-Bold.woff') format('woff'),
      url('/fonts/satoshi/Satoshi-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Air.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Thin.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Retina.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Black.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'AtHaussStd';
    src: url('/fonts/AtHaussStd-Super.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'AtHaussStd';
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
  }
`;
