export interface Coin {
  name: string;
  quantity: number;
  value: number;
  image: any;
  acronym: string;
}

export const coins: Coin[] = [
  {
    name: 'Bitcoin',
    image: require('../assets/coins/btc.png'),
    acronym: 'BTC',
    quantity: 0.32,
    value: 12839.28,
  },
  {
    name: 'Ethereum',
    image: require('../assets/coins/eth.png'),
    acronym: 'ETH',
    quantity: 12.3,
    value: 13537.26,
  },
  {
    name: 'US Dollar',
    image: require('../assets/coins/usd.png'),
    acronym: 'USD',
    quantity: 3.24,
    value: 3.24,
  },
  {
    name: 'USD Coin',
    image: require('../assets/coins/usdc.png'),
    acronym: 'USDC',
    value: 0,
    quantity: 0,
  },
  {
    name: 'Dai',
    image: require('../assets/coins/sai.png'),
    acronym: 'DAI',
    quantity: 0,
    value: 0,
  },
  {
    name: 'XRP',
    image: require('../assets/coins/xrp.png'),
    acronym: 'XRP',
    quantity: 0,
    value: 0,
  },
  {
    name: 'Litecoin',
    image: require('../assets/coins/ltc.png'),
    acronym: 'LTC',
    quantity: 0,
    value: 0,
  },
  {
    name: 'Bitcoin Cash',
    image: require('../assets/coins/bch.png'),
    acronym: 'BCH',
    quantity: 0,
    value: 0,
  },
  {
    name: 'EOS',
    image: require('../assets/coins/eos.png'),
    acronym: 'EOS',
    quantity: 0,
    value: 0,
  },
  {
    name: 'Dash',
    image: require('../assets/coins/dash.png'),
    acronym: 'DASH',
    quantity: 0,
    value: 0,
  },
];
