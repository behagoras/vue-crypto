import Vue from 'vue';
import router from '@/router';
import App from './App.vue';
import './assets/css/tailwind.css';
import { dollarFilter, percentFilter } from './services/filters';

Vue.filter('dollar', dollarFilter);
Vue.filter('percent', percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
