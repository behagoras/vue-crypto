<template>
  <div>
    <BounceLoader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    />
    <AssetsTable
      v-if="!isLoading"
      :assets="assets"
    />
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
      isLoading: false,

      assets: [],
    };
  },
  created() {
    this.isLoading = true;

    api
      .getAssets()
      .then((assets) => { this.assets = assets; })
      .finally(() => { this.isLoading = false; });
  },
};
</script>

<style lang="scss" scoped></style>
