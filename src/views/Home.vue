<template>
  <div>
    <AssetsTable :assets="assets" />
  </div>
</template>

<script>
import AssetsTable from '@/components/AssetsTable.vue';
import api from '../services/api';

export default {
  name: 'Home',
  components: {
    AssetsTable,
  },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => {
      this.assets = assets;
    });
  },
};
</script>

<style lang="scss" scoped></style>
