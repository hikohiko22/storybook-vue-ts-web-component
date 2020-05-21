import Vue from 'vue'
import '@material/mwc-button'
import '../src/components/webComponentsTest/ESModules.js'

Vue.config.productionTip = false;
// ↓この3行を追加
Vue.config.ignoredElements = [
  'mwc-button','mwc-icon',''
];
