# vue-crypto

[![Vue.js](https://img.shields.io/badge/Vue.js-2-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-2-FF6384?logo=chart.js&logoColor=white)](https://www.chartjs.org/)

Real-time cryptocurrency dashboard that pulls market data from the CoinCap API. Shows a ranked table of the top 20 assets with prices, market cap, and 24h change. Click into any coin for a detail view with price history charts, exchange market data, and computed stats (min, max, average).

## Stack

- **Vue 2** with Vue Router (history mode)
- **CoinCap API v2** for live asset data, price history, and exchange info
- **Chart.js** via vue-chartkick for 24h price line charts
- **Tailwind CSS** for layout and styling
- **Numeral.js** for currency and percentage formatting

## Running It

```bash
git clone https://github.com/behagoras/vue-crypto.git
cd vue-crypto
npm install
npm run serve
```

Opens at [http://localhost:8080](http://localhost:8080). No API key needed (CoinCap v2 is public).

## Pages

- **Home** (`/`) : Sortable table of top 20 cryptocurrencies with rank, price, market cap, supply, and 24h variation
- **Coin Detail** (`/coin/:id`) : Full detail view with coin icon, current price, computed min/max/average from 24h history, interactive price chart, and exchange market table with links

## Project Layout

```
src/
  views/          Home, CoinDetail, About, Error
  components/     AssetsTable, Header, Logo, Button
  services/
    api.js        CoinCap API client (assets, history, markets, exchanges)
    filters.js    Vue filters for dollar and percent formatting
  router.js       Route definitions
```

## License

MIT
