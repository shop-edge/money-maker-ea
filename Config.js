// MONEY MAKER EA V1
// Configuration

const CONFIG = {
  appName: "MONEY MAKER EA",
  version: "V1.0.0",

  // Trading
  symbol: "XAUUSD",
  timeframe: "M5",

  // Risk settings
  lotSize: 0.01,
  stopLossPoints: 500,
  takeProfitPoints: 1000,

  // Trade limits
  maxOpenTrades: 1,
  allowBuy: true,
  allowSell: true,

  // MT5API
  mt5api: {
    baseUrl: "",
    apiKey: ""
  }
};

module.exports = CONFIG;
