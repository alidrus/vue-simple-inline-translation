<template>
    <div id="app">
        <translate language="en" v-bind:current-language="current">
        Good <b>Morning</b></translate>
        <translate language="ms" v-bind:current-language="current">
        Selamat <b>Pagi</b></translate>
    </div>
</template>

<script>
/* eslint quote-props: ["error", "as-needed", {"unnecessary": false}] */
import VueSimpleInlineTranslation from '@/components/VueSimpleInlineTranslation.vue';

export default {
    name: 'app',
    components: {
        'translate': VueSimpleInlineTranslation
    },
    data() {
        return {
            current: 'ms'
        };
    } // eslint-disable-next-line
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
