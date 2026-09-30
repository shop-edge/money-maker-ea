// MONEY MAKER EA V1
// Risk management

function validateTrade(settings) {
  if (!settings) {
    return {
      allowed: false,
      reason: "Missing settings"
    };
  }

  if (settings.lotSize <= 0) {
    return {
      allowed: false,
      reason: "Invalid lot size"
    };
  }

  if (settings.maxOpenTrades <= 0) {
    return {
      allowed: false,
      reason: "Invalid trade limit"
    };
  }

  return {
    allowed: true,
    reason: "Trade settings valid"
  };
}

module.exports = {
  validateTrade
};
