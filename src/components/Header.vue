<template>
  <header class="shadow w-screen">
    <nav>
      <nav
        class="flex items-center justify-between flex-wrap bg-green-400 p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <logo class="mr-2" />
          <router-link
            :to="{name:'home'}"
            class="font-semibold text-xl tracking-tight"
          >
            Crypto Exchange
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow" />
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'CHeader',

  components: { Logo },
};
</script>
