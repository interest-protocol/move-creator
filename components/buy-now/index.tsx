import { Motion } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui/utils';
import { Button, ButtonProps } from '@stylin.js/elements';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

import { CA } from '../../constants';
import { TimesSVG } from '../svg';

const SwapInterface = dynamic(
  import('../../lib/terminal').then(({ SwapInterface }) => SwapInterface),
  { ssr: false }
);

const BuyNow: FC<ButtonProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        all="unset"
        px="4rem"
        bg="#9FECFE"
        py="0.825rem"
        cursor="pointer"
        fontWeight="600"
        textAlign="center"
        borderRadius="0.625rem"
        onClick={() => setOpen(true)}
        {...props}
      >
        Buy now
      </Button>
      {open && (
        <Motion
          inset="0"
          bg="#0003"
          width="100vw"
          height="100vh"
          display="flex"
          position="fixed"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            all="unset"
            top="1rem"
            right="1rem"
            bg="#9FECFE"
            width="3rem"
            height="3rem"
            cursor="pointer"
            fontWeight="600"
            textAlign="center"
            borderRadius="50%"
            position="absolute"
            onClick={() => setOpen(false)}
          >
            <TimesSVG maxWidth="0.85rem" maxHeight="0.85rem" width="100%" />
          </Button>
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SwapInterface fixedOut typeIn={SUI_TYPE_ARG} typeOut={CA} />
          </Motion>
        </Motion>
      )}
    </>
  );
};

export default BuyNow;
