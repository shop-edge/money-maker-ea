// MONEY MAKER EA V1
// Basic strategy engine

function getSignal(data) {
  if (!data || !data.price) {
    return "NO_TRADE";
  }

  // Strategy will be connected here.
  // BUY / SELL conditions will be added after
  // the MT5API market-data format is confirmed.

  return "NO_TRADE";
}

module.exports = {
  getSignal
};
