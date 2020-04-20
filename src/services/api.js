const API_URL = 'https://api.coincap.io/v2';

const getAssets = () => fetch(`${API_URL}/assets?limit=20`)
  .then((res) => res.json())
  .then((res) => res.data);

const getAsset = (coin) => fetch(`${API_URL}/assets/${coin}`)
  .then((res) => res.json())
  .then((res) => res.data);

const getAssetHistory = (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${API_URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`,
  )
    .then((res) => res.json())
    .then((res) => res.data);
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
};
