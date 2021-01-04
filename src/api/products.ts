export interface CoinbaseProductStat {
  stats_30day: {
    volume: number;
  };
  stats_24hour: {
    open: number;
    high: number;
    low: number;
    volume: number;
    last: number;
    volume_30day: number;
  };
}

type ProductStatsResponse = Record<string, CoinbaseProductStat>;

export interface Product {
  volume: number;
  last: number;
  open: number;
  baseCurrency: string;
  quoteCurrency: string;
}

const transformProducts = (data: ProductStatsResponse): Product[] => {
  const products: Product[] = Object.keys(data).map((stat) => {
    const pair = data[stat];
    return {
      volume: pair.stats_24hour.volume,
      last: pair.stats_24hour.last,
      open: pair.stats_24hour.open,
      baseCurrency: stat.split('-')[0],
      quoteCurrency: stat.split('-')[1],
    };
  });
  return products;
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const results = await fetch('https://api.pro.coinbase.com/products/stats');
    const json = (await results.json()) as ProductStatsResponse;
    const products = transformProducts(json);
    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
};
