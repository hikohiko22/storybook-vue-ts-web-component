import HelloWorld from './HelloWorld.vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'HelloWorld',
  decorators: [withKnobs]
}

export const ButtonTest = () => ({
  components: { HelloWorld },
  template: '<HelloWorld :msg="msg" :icon="icon" :disabled="disabled"/>',
  props: {
    icon: {
      default: text('iconClass', 'code')
    },
    msg: {
      default: text('Text', 'Hello Storybook')
    },
    disabled: {
      default: boolean('disabled', false)
    }
  }
});