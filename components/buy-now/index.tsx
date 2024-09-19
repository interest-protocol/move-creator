import { Modal, Motion } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui/utils';
import { Button, ButtonProps, Div } from '@stylin.js/elements';
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
      <Modal custom isOpen={open} onClose={() => setOpen(false)}>
        <Div display="flex" flexDirection="column">
          <Button
            all="unset"
            ml="auto"
            mb="1rem"
            bg="#9FECFE"
            cursor="pointer"
            textAlign="center"
            borderRadius="50%"
            onClick={() => setOpen(false)}
            width={['2rem', '2rem', '3rem']}
            height={['2rem', '2rem', '3rem']}
          >
            <TimesSVG maxWidth="0.85rem" maxHeight="0.85rem" width="100%" />
          </Button>
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SwapInterface fixedOut typeIn={SUI_TYPE_ARG} typeOut={CA} />
          </Motion>
        </Div>
      </Modal>
    </>
  );
};

export default BuyNow;
