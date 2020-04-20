<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th />
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assets"
        :key="asset.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <img
          :src="
            `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
          "
          :alt="asset.name"
          class="img-symbol"
          style=""
        >
        <td>
          <b>#{{ asset.rank }}</b>
        </td>
        <td>{{ asset.name }}</td>
        <td>{{ asset.priceUsd | dollar }}</td>
        <td>{{ asset.marketCapUsd | dollar }}</td>
        <td
          :class="
            Number(asset.changePercent24Hr) < 0
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ asset.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block" />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'AssetsTable',

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.img-symbol {
  max-width: 64px;
}
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
