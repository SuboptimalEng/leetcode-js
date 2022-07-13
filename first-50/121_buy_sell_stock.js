/*
121. Best Time to Buy and Sell Stock
Easy

17809
576

You are given an array prices where prices[i] is the price
of a given stock on the ith day.

You want to maximize your profit by choosing a single day
to buy one stock and choosing a different day in the future
to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on
day 5 (price = 6), profit = 6-1 = 5.

Note that buying on day 2 and selling on day 1 is not
allowed because you must buy before you sell.
*/

var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let buy = 0;
  let sell = 1;

  // initialize max profit
  let maxProfit = prices[sell] - prices[buy];

  while (true) {
    if (sell === prices.length) {
      break;
    }

    // if the price at sell, is less than price at buy
    // then update the buy price
    if (prices[sell] < prices[buy]) {
      buy = sell;
      sell++;
    } else {
      sell++;
    }

    let currProfit = prices[sell] - prices[buy];
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }
  }

  // if max profit is negative, just return 0
  return Math.max(maxProfit, 0);
};
