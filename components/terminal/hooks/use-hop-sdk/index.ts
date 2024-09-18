import type { Trade } from '@hop.ag/sdk';
import { Transaction } from '@mysten/sui/transactions';

import { JSONQuoteResponse } from '../../swap/swap.types';

export const useHopSdk = () => ({
  quote: (coinIn: string, coinOut: string, amountIn: string) =>
    fetch(
      `https://suicoins.com/api/terminal/v1/hop/quote?coinIn=${coinIn}&coinOut=${coinOut}&amountIn=${amountIn}`
    ).then((response) => response.json?.()) as Promise<JSONQuoteResponse>,
  swap: (trade: Trade, account: string, slippage: number) =>
    fetch(`https://suicoins.com/api/terminal/v1/hop/swap`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trade, account, slippage }),
    })
      .then((response) => response.json?.())
      .then(({ txb }: { txb: string }) =>
        Transaction.fromKind(txb)
      ) as Promise<Transaction>,
});
