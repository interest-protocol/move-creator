import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Provider from './components/provider';
import Web3Manager from './components/web3-manager';
import Swap from './swap';
import { Aggregator, SwapForm } from './swap/swap.types';
import SwapInitManager from './swap/swap-init-manager';

interface SwapInterfaceProps {
  typeIn: string;
  typeOut: string;
  fixedIn?: boolean;
  fixedOut?: boolean;
  interval?: `${number}`;
  slippage?: `${number}`;
  aggregator?: Aggregator;
}

export const SwapInterface: FC<SwapInterfaceProps> = ({
  typeIn,
  typeOut,
  fixedIn,
  fixedOut,
  interval,
  slippage,
  aggregator,
}) => {
  const form = useForm<SwapForm>({
    defaultValues: {
      focus: true,
      loading: true,
      fixedIn: fixedIn ?? false,
      fixedOut: fixedOut ?? false,
      settings: {
        interval: interval ?? '10',
        slippage: slippage ?? '0.1',
        aggregator: aggregator ?? Aggregator.Hop,
      },
    },
  });

  return (
    <Provider>
      <Box
        p="xs"
        gap="xs"
        mx="auto"
        width="25rem"
        display="flex"
        maxHeight="95vh"
        overflowY="auto"
        bg="lowContainer"
        borderRadius="xs"
        position="relative"
        flexDirection="column"
      >
        <Web3Manager />
        <FormProvider {...form}>
          <SwapInitManager from={typeIn} to={typeOut} />
          <Swap />
        </FormProvider>
      </Box>
    </Provider>
  );
};
