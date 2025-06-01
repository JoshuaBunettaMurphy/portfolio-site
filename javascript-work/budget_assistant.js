let startupName = "Arasaka";
let initialCapital = 80003; // in dollars
let monthlyRevenue = 23069; // in dollars
let monthlyExpenses = 17038; // in dollars

let netCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netCashFlow;
let isProfitable = netCashFlow > 0;

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);



