<template>
  <button
    :class="`bg-transparent bg-green-500 hover:bg-green-700 text-green-700font-semibold
      hover:text-white px-2borderborder-green-500 hover:border-transparent
      rounded px-3 py-2
    `"
    @click="buttonClick"
  >
    <BeatLoader
      :loading="isLoading"
      :color="'#68d391'"
      :size="8"
    />
    <slot v-show="!isLoading" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    buttonClick() {
      this.$emit('click');
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
