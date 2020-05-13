import Vue from 'vue'
import App from './App.vue'
import '@material/mwc-button'
import '@material/mwc-icon'

Vue.config.productionTip = false;
// ↓この3行を追加
Vue.config.ignoredElements = [
  'mwc-button','mwc-icon'
];

new Vue({
  render: h => h(App),
}).$mount('#app')
