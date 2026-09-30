// MONEY MAKER EA V1
// Safe test mode — NO REAL TRADES

const CONFIG = require("./config");
const { getSignal } = require("./strategy");
const { validateTrade } = require("./risk");
const {
  canOpenTrade,
  createTradeRequest
} = require("./trades");
const { executeTrade } = require("./executor");

async function testMoneyMaker() {
  console.log("================================");
  console.log("MONEY MAKER EA V1 TEST");
  console.log("================================");

  const risk = validateTrade(CONFIG);

  console.log("Risk check:", risk);

  if (!risk.allowed) {
    return;
  }

  // Fake market data for testing only
  const marketData = {
    price: 0
  };

  const signal = getSignal(marketData);

  console.log("Signal:", signal);

  const openTrades = 0;

  if (!canOpenTrade(openTrades, CONFIG.maxOpenTrades)) {
    console.log("Trade limit reached.");
    return;
  }

  const trade = createTradeRequest(
    signal,
    CONFIG.symbol,
    CONFIG.lotSize,
    CONFIG.stopLossPoints,
    CONFIG.takeProfitPoints
  );

  if (!trade) {
    console.log("No trade generated.");
    return;
  }

  const result = await executeTrade(
    process.env.MT5_ACCOUNT_ID,
    trade
  );

  console.log("Execution result:", result);
}

testMoneyMaker().catch((error) => {
  console.error("TEST ERROR:", error.message);
});
