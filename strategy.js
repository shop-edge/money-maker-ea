// MONEY MAKER EA V1
// EMA + RSI strategy

const { ema, rsi } = require("./indicators");

function getSignal(data) {
  if (!data || !Array.isArray(data.closes)) {
    return "NO_TRADE";
  }

  const closes = data.closes;

  if (closes.length < 30) {
    return "NO_TRADE";
  }

  const fastEMA = ema(closes, 9);
  const slowEMA = ema(closes, 21);
  const currentRSI = rsi(closes, 14);

  if (
    fastEMA === null ||
    slowEMA === null ||
    currentRSI === null
  ) {
    return "NO_TRADE";
  }

  if (fastEMA > slowEMA && currentRSI > 50) {
    return "BUY";
  }

  if (fastEMA < slowEMA && currentRSI < 50) {
    return "SELL";
  }

  return "NO_TRADE";
}

module.exports = {
  getSignal
};
