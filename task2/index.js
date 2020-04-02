const dayTransactions = [
    {currency: 'USD', amount: 60, operation: 'sell'},
    {currency: 'EUR', amount: 160, operation: 'buy'},
    {currency: 'EUR', amount: 90, operation: 'sell'},
];

function getTotalBalance(transactionsList) {
   const transformedTransaction = transactionsList.map(function(transactionObj) {
      const key = transactionObj.currency;
      const value = transactionObj.amount;
    const obj = {
    [key] : transactionObj.operation === 'sell' ?  -value : value
    };
    return obj;
   });
  
   const result = transformedTransaction.reduce(function(acc, transactionObj) {
      console.log(transactionObj);
    //   {USD : -60}
    //   {EUR : 160}
    //   {EUR : -90}
      Object.assign(acc, transactionObj);
      
      return acc
    }, {});
    return result;
}

// const reduces = {
//     USD: function(state, item) {
//         return state.rubles += item.price;
//       },
//     EUR: function(state, item) {
//         return state.dollars += item.price 
//       },
// }

// const result1 = e()

const result = getTotalBalance(dayTransactions);
console.log(result);