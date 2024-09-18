import { useCurrentAccount, useSuiClient } from '@mysten/dapp-kit';
import { normalizeStructTag, SUI_TYPE_ARG } from '@mysten/sui/utils';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import useSWR from 'swr';

import { Network } from '@/constants';
import { useCoins } from '@/hooks/use-coins';
import { useNetwork } from '@/hooks/use-network';
import {
  fetchCoinMetadata,
  isSui,
  makeSWRKey,
  ZERO_BIG_NUMBER,
} from '@/integration/utils';
import { CoinMetadataWithType } from '@/interface';

import { METADATA } from '../../../constants/metadata';
import { CoinsMap, TGetAllCoins } from './coins-manager.types';

const getAllCoins: TGetAllCoins = async (provider, account, cursor = null) => {
  const { data, nextCursor, hasNextPage } = await provider.getAllCoins({
    owner: account,
    cursor,
  });

  if (!hasNextPage) return data;

  const newData = await getAllCoins(provider, account, nextCursor);

  return [...data, ...newData];
};

const CoinsManager: FC = () => {
  const network = useNetwork();
  const suiClient = useSuiClient();
  const currentAccount = useCurrentAccount();
  const { id, delay, updateCoins, updateLoading, updateError } = useCoins();

  useSWR(
    makeSWRKey([id, network, currentAccount?.address], CoinsManager.name),
    async () => {
      try {
        updateError(false);
        updateLoading(true);
        if (!currentAccount?.address) return updateCoins({} as CoinsMap);

        const coinsRaw = await getAllCoins(suiClient, currentAccount.address);

        if (!coinsRaw.length) return updateCoins({} as CoinsMap);

        const coinsType = coinsRaw.reduce(
          (acc, { coinType }) =>
            acc.includes(coinType) ? acc : [...acc, coinType],
          [] as ReadonlyArray<string>
        );

        const dbCoinsMetadata: Record<string, CoinMetadataWithType> =
          await fetchCoinMetadata({ network, types: coinsType }).then((data) =>
            data.reduce((acc, item) => {
              const override =
                METADATA[network as Network][normalizeStructTag(item.type)] ||
                item;
              return {
                ...acc,
                [normalizeStructTag(override.type)]: {
                  ...override,
                  type: normalizeStructTag(override.type),
                },
              };
            }, {})
          );

        const filteredCoinsRaw = coinsRaw.filter(
          ({ coinType }) => dbCoinsMetadata[normalizeStructTag(coinType)]
        );

        if (!filteredCoinsRaw.length) return updateCoins({} as CoinsMap);

        const coins = filteredCoinsRaw.reduce(
          (acc, { coinType, ...coinRaw }) => {
            const type = normalizeStructTag(coinType) as `0x${string}`;
            const { symbol, decimals, ...metadata } = dbCoinsMetadata[type];

            if (isSui(type))
              return {
                ...acc,
                [SUI_TYPE_ARG as `0x${string}`]: {
                  ...acc[SUI_TYPE_ARG as `0x${string}`],
                  ...coinRaw,
                  type: SUI_TYPE_ARG as `0x${string}`,
                  symbol,
                  decimals,
                  metadata,
                  balance: BigNumber(coinRaw.balance).plus(
                    acc[SUI_TYPE_ARG as `0x${string}`]?.balance ??
                      ZERO_BIG_NUMBER
                  ),
                  objects: (acc[SUI_TYPE_ARG as string]?.objects ?? []).concat([
                    { ...coinRaw, type: SUI_TYPE_ARG as `0x${string}` },
                  ]),
                },
              };

            return {
              ...acc,
              [type]: {
                ...acc[type],
                ...coinRaw,
                type,
                symbol,
                decimals,
                metadata,
                balance: BigNumber(coinRaw.balance).plus(
                  acc[type]?.balance ?? ZERO_BIG_NUMBER
                ),
                objects: (acc[type]?.objects ?? []).concat([
                  { ...coinRaw, type },
                ]),
              },
            };
          },
          {} as CoinsMap
        ) as unknown as CoinsMap;

        updateCoins(coins);
      } catch {
        updateError(true);
      } finally {
        updateLoading(false);
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: delay,
    }
  );

  return null;
};

export default CoinsManager;
