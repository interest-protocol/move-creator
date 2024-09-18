import { Modal } from '@interest-protocol/ui-kit';
import { Button, ButtonProps } from '@stylin.js/elements';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

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
        <SwapInterface
          fixedOut
          typeIn="0x2::sui::SUI"
          typeOut="0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD"
        />
      </Modal>
    </>
  );
};

export default BuyNow;
