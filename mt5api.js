// MONEY MAKER EA V1
// MT5API.dev connection layer

const BASE_URL = "https://api.mt5api.dev/v1";

async function apiRequest(endpoint, options = {}) {
  const apiKey = process.env.MT5API_KEY;

  if (!apiKey) {
    throw new Error("MT5API_KEY is not configured");
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || `MT5API request failed: ${response.status}`
    );
  }

  return data;
}

async function getAccount(accountId) {
  return apiRequest(`/accounts/${accountId}`);
}

async function getPositions(accountId) {
  return apiRequest(`/accounts/${accountId}/positions`);
}

async function getQuotes(accountId, symbol) {
  return apiRequest(
    `/accounts/${accountId}/quotes?symbol=${encodeURIComponent(symbol)}`
  );
}

async function placeOrder(accountId, order) {
  return apiRequest(`/accounts/${accountId}/orders`, {
    method: "POST",
    headers: {
      "Idempotency-Key": `money-maker-${Date.now()}`
    },
    body: JSON.stringify(order)
  });
}

module.exports = {
  getAccount,
  getPositions,
  getQuotes,
  placeOrder
};
