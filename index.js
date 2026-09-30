// MONEY MAKER EA V1
// Main controller

const CONFIG = require("./config");
const { getSignal } = require("./strategy");
const { validateTrade } = require("./risk");
const {
  canOpenTrade,
  createTradeRequest
} = require("./trades");

async function run() {
  console.log(`${CONFIG.appName} ${CONFIG.version} started`);

  const riskCheck = validateTrade(CONFIG);

  if (!riskCheck.allowed) {
    console.error("Risk check failed:", riskCheck.reason);
    return;
  }

  console.log("Risk settings valid");
  console.log("Symbol:", CONFIG.symbol);
  console.log("Timeframe:", CONFIG.timeframe);
  console.log("Lot size:", CONFIG.lotSize);

  // MT5API market data will be connected here.
  const marketData = null;

  const signal = getSignal(marketData);

  console.log("Current signal:", signal);

  if (signal === "NO_TRADE") {
    console.log("No trade — waiting for a valid setup.");
    return;
  }

  // Trade execution will be connected here.
  console.log("Trade setup detected:", signal);
}

run().catch((error) => {
  console.error("MONEY MAKER error:", error.message);
});
