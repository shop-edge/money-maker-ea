// MONEY MAKER EA V1
// Offline strategy test — NO REAL TRADES

const { getSignal } = require("./strategy");

const prices = [
  100, 100.2, 100.4, 100.3, 100.6,
  100.8, 101, 100.9, 101.2, 101.4,
  101.6, 101.5, 101.8, 102, 102.2,
  102.1, 102.4, 102.6, 102.8, 103,
  103.2, 103.1, 103.4, 103.6, 103.8,
  104, 104.2, 104.1, 104.4, 104.6,
  104.8, 105
];

const signal = getSignal({
  closes: prices
});

console.log("MONEY MAKER V1");
console.log("Test candles:", prices.length);
console.log("Strategy signal:", signal);
console.log("REAL TRADE: NO");
