var maxProfit = function(prices){
    let profit = 0, minimalCost = prices[0],cost;
    for (let i = 0; i < prices.length; i++) {
        cost = prices[i] - minimalCost;
        profit = Math.max(profit, cost);
        minimalCost = Math.min(minimalCost, prices[i])      
    }
    return profit;
}


console.log(maxProfit([7,1,5,3,6,4]));