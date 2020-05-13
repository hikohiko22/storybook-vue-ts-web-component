import { configure } from '@storybook/vue';
import Vue from 'vue'
import '@material/mwc-button'
import '@material/mwc-icon'

// automatically import all files ending in *.stories.ts
const req = require.context('../src/components', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

Vue.config.productionTip = false;
// ↓この3行を追加
Vue.config.ignoredElements = [
  'mwc-button','mwc-icon'
];

configure(loadStories, module);
