export const getPercentChange = (before: number, after: number): number => {
  const gainOrLoss = after - before;
  return parseFloat(((gainOrLoss / before) * 100).toFixed(2));
};

export const getPrettyNumber = (number: number): number | string => {
  if (number > 999 && number < 1000000) {
    return (number / 1000).toFixed(1) + 'K';
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  }
  return number;
};
