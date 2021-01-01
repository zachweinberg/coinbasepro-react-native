export const getPercentChange = (before: number, after: number): number => {
  const gainOrLoss = after - before;
  return parseFloat(((gainOrLoss / before) * 100).toFixed(2));
};
