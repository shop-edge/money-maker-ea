// MONEY MAKER EA V1
// Trade management

function canOpenTrade(openTrades, maxOpenTrades) {
  if (openTrades >= maxOpenTrades) {
    return false;
  }

  return true;
}

function createTradeRequest(signal, symbol, lotSize, stopLoss, takeProfit) {
  if (signal !== "BUY" && signal !== "SELL") {
    return null;
  }

  return {
    action: signal,
    symbol,
    volume: lotSize,
    stopLoss,
    takeProfit
  };
}

module.exports = {
  canOpenTrade,
  createTradeRequest
};
