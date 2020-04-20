import Vue from 'vue';
import router from '@/router';
import './assets/css/tailwind.css';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { VueSpinners } from '@saeris/vue-spinners';
import { dollarFilter, percentFilter } from './services/filters';

import App from './App.vue';

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
Vue.config.productionTip = false;
Vue.use(Chartkick.use(Chart));
Vue.use(VueSpinners);


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
