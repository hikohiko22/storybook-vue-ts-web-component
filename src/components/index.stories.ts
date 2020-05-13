import { storiesOf } from '@storybook/vue';

import HelloWorld from './HelloWorld.vue';

storiesOf('HelloWorld', module).add('simple', () => ({
  components: { HelloWorld },
  template: `<HelloWorld msg="Welcome!!!"/>`,
}));
