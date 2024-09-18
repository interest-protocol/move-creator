import { CoinObject } from '@/components/web3-manager/coins-manager/coins-manager.types';
import { getSymbolByType, ZERO_BIG_NUMBER } from '@/integration/utils';
import { CoinMetadataWithType } from '@/interface';

export const metadataToCoin = (coinMetadata: CoinMetadataWithType) => {
  const { type, symbol, decimals, ...metadata } = coinMetadata;

  return {
    type,
    symbol,
    decimals,
    metadata,
    objects: [],
    balance: ZERO_BIG_NUMBER,
  };
};

export const mapMetadataToCoin = (
  coinType: `0x${string}`,
  coinsMetadata: Record<string, CoinMetadataWithType>
): CoinObject => {
  if (!coinType || !coinsMetadata[coinType])
    return {
      decimals: 0,
      objects: [],
      type: coinType,
      balance: ZERO_BIG_NUMBER,
      symbol: getSymbolByType(coinType),
      metadata: {
        description: '',
        name: getSymbolByType(coinType),
      },
    };

  return metadataToCoin(coinsMetadata[coinType]);
};
