// MONEY MAKER EA V1
// Trade execution controller

const { placeOrder } = require("./mt5api");

async function executeTrade(accountId, trade) {
  if (!accountId) {
    throw new Error("MT5 account ID is required");
  }

  if (!trade || !["BUY", "SELL"].includes(trade.action)) {
    throw new Error("Invalid trade request");
  }

  console.log("Preparing trade:", trade);

  // Real execution will only happen when the
  // authenticated MT5API account is connected.
  return {
    status: "READY",
    accountId,
    trade
  };
}

module.exports = {
  executeTrade
};
