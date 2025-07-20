function maxProfit(prices) {
    let min = prices[0];   // 7
      let maxProfit = 0;
      for (let i = 1; i < prices.length; i++) {
          if (prices[i] - min > maxProfit) {   // prices[i] == 1 -7 === -6>0 // 5-1 = 4>0 profit 4 
              maxProfit = prices[i] - min;
          }
          if (prices[i] < min) {
              min = prices[i];
          }
      }
      return maxProfit;

};
const result = maxProfit([7, 1, 5, 3, 6, 4])
console.log(result)