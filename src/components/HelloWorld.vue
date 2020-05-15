<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <mwc-button raised :icon="icon" :label="msg" :disabled="disabled"></mwc-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private icon!: string;
  @Prop({ default: false }) private disabled!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
