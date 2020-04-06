const dayTransactions = [
    {currency: 'USD', amount: 60, operation: 'sell'},
    {currency: 'EUR', amount: 160, operation: 'buy'},
    {currency: 'EUR', amount: 90, operation: 'sell'},
];

function getTotalBalance(transactions) {
  const result = transactions.reduce(function(acc, transaction) {
      const { currency, amount, operation } = transaction;
      const oldAmount = acc[currency] || 0;
      const newAmount =
          operation === 'sell' ? oldAmount - amount : oldAmount + amount;
      return {
          ...acc,
          [currency]: newAmount,
      };
  }, {});
  return result;
}

const result = getTotalBalance(dayTransactions);
console.log(result);