//Write a function that returns the maximum profit possible for buying-and-selling a stock.

// The function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
// best([15, 10, 20, 22, 1, 9]) // 12

// If no profit is possible, return $0:

const stockPrices = (arr) => {
  let profit = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      //   console.log(`i is ${arr[i]} x is ${arr[x]}`);
      let sale = arr[x] - arr[i];
      if (sale > profit) {
        profit = sale;
        // console.log(profit)
      }
    }
  }
  return profit;
};

console.log(stockPrices([1, 2, 3, 4, 5])); // 4 - buy at $1, sell at $5
console.log(stockPrices([5, 4, 3, 2, 1])); // 0
