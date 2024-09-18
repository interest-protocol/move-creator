import { FC } from 'react';

import { SVGProps } from './svg.types';

const MATIC: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 22"
    fill="none"
    {...props}
  >
    <path
      d="M18.1724 6.45436C17.7338 6.20393 17.1697 6.20393 16.6683 6.45436L13.1593 8.5226L10.7783 9.83811L7.33169 11.9078C6.89319 12.1582 6.329 12.1582 5.82765 11.9078L3.13426 10.2785C2.9052 10.1436 2.71533 9.95119 2.5834 9.7204C2.45146 9.4896 2.38204 9.22837 2.382 8.96252V5.8278C2.382 5.32645 2.63291 4.8251 3.13426 4.51182L5.82765 2.9454C6.26615 2.69449 6.83034 2.69449 7.33169 2.9454L10.0251 4.57466C10.2542 4.70953 10.4441 4.90188 10.5761 5.1327C10.708 5.36351 10.7774 5.62478 10.7773 5.89064V7.95841L13.1584 6.57958V4.44944C13.1584 3.94809 12.908 3.44674 12.4066 3.13346L7.39407 0.18916C6.95556 -0.0617511 6.39184 -0.0617511 5.89049 0.18916L0.751787 3.19583C0.250438 3.44674 0 3.94809 0 4.44944V10.3395C0 10.8408 0.250438 11.3407 0.751787 11.6554L5.82765 14.6012C6.26615 14.8521 6.83034 14.8521 7.33169 14.6012L10.7783 12.5958L13.1593 11.2174L16.6059 9.21202C17.0444 8.96158 17.6086 8.96158 18.11 9.21202L20.8034 10.7789C21.0328 10.9139 21.223 11.1066 21.355 11.3377C21.4871 11.5689 21.5564 11.8306 21.5561 12.0968V15.2296C21.5561 15.731 21.3057 16.2323 20.8043 16.5456L18.1724 18.1125C17.7338 18.3629 17.1697 18.3629 16.6683 18.1125L13.9749 16.5456C13.7459 16.4106 13.5561 16.2183 13.4243 15.9874C13.2924 15.7566 13.2231 15.4954 13.2231 15.2296V13.2223L10.8407 14.6012V16.6689C10.8407 17.1703 11.0916 17.6716 11.5929 17.9849L16.6683 20.9302C17.1073 21.1811 17.671 21.1811 18.1724 20.9302L23.2482 17.9844C23.4772 17.8495 23.667 17.6571 23.7989 17.4263C23.9307 17.1955 24 16.9343 24 16.6685V10.7146C24 10.2133 23.7496 9.71195 23.2482 9.39866L18.1724 6.45436Z"
      fill="currentColor"
    />
  </svg>
);

export default MATIC;
