import { FC } from 'react';

import { SVGProps } from './svg.types';

const Unmuted: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 19"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4201 0.270846C17.7801 -0.0890452 18.3538 -0.0911623 18.7275 0.269787C19.0906 0.632854 19.0906 1.21926 18.7286 1.58127L1.57987 18.729C1.40943 18.8994 1.16383 19 0.924581 19C0.690624 19 0.459843 18.9047 0.273524 18.7322C-0.0906438 18.3543 -0.0906437 17.7795 0.270349 17.4186L3.09689 14.5924H3.0683C1.65927 14.5924 0.633458 13.5974 0.442905 12.052C0.230121 10.5066 0.272466 7.86031 0.442905 6.4525C0.642986 4.99177 1.72385 3.98725 3.0683 3.98725H4.89867L8.39215 1.12929C8.81666 0.769401 9.56828 0.429621 10.1495 0.420095C11.2081 0.420095 12.182 1.15999 12.5314 2.34551C12.669 2.84407 12.723 3.3405 12.7653 3.81789L12.849 4.49427C12.8627 4.59801 12.8754 4.69751 12.886 4.80336L17.4201 0.270846ZM11.8809 10.7314C12.0238 10.5917 12.3435 10.4911 12.4874 10.5282C12.876 10.6266 12.9522 11.1844 12.9458 11.6227C12.9278 12.895 12.8855 13.7799 12.8177 14.3271L12.7701 14.7781L12.7693 14.7864C12.724 15.24 12.6772 15.7094 12.5425 16.2102C12.19 17.3936 11.2446 18.1621 10.1701 18.1621C10.1352 18.1621 10.1002 18.1621 10.0642 18.161C9.47036 18.161 8.82671 17.8054 8.46149 17.4952L7.16043 16.4886C6.66605 16.1213 6.81214 15.5349 7.0895 15.1951C7.29663 14.9422 9.78605 12.6569 11.0935 11.4566C11.5369 11.0496 11.8444 10.7673 11.8809 10.7314Z"
      fill="currentColor"
    />
  </svg>
);

export default Unmuted;
