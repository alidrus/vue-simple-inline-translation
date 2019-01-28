<template>
    <div id="app">
        <select v-model='current'>
            <option v-for="(value, key, index) in languages" v-bind:key="index" v-bind:value="key">{{ value }}</option>
        </select>

        <translate enclosing-tag="h3" language="ar" v-bind:current-language="current"><b>صباح</b> الخير</translate>
        <translate enclosing-tag="h3" language="en" v-bind:current-language="current">Good <b>Morning</b></translate>
        <translate enclosing-tag="h3" language="ms" v-bind:current-language="current">Selamat <b>Pagi</b></translate>
        <translate enclosing-tag="h3" language="sv" v-bind:current-language="current">God <b>Morgon</b></translate>
        <translate enclosing-tag="h3" language="tl" v-bind:current-language="current">Magandang <b>Umaga</b></translate>

        <p>Hello! My language is <b>{{ languages[current] }}</b> and the way I say welcome is:
        <translate v-bind:current-language="current" language="ar"><b>اهلا و سهلا</b></translate>
        <translate v-bind:current-language="current" language="en"><b>Welcome</b></translate>
        <translate v-bind:current-language="current" language="ms"><b>Selamat Datang</b></translate>
        <translate v-bind:current-language="current" language="sv"><b>Välkommen</b></translate>
        <translate v-bind:current-language="current" language="tl"><b>Maligayang Pagdating</b></translate>
        </p>
    </div>
</template>

<script>
import VueSimpleInlineTranslation from '@/components/VueSimpleInlineTranslation.vue';

export default {
    name: 'app',
    components: {
        translate: VueSimpleInlineTranslation
    },
    data() {
        return {
            languages: {
                ar: 'العربية',
                en: 'English',
                ms: 'Bahasa Melayu',
                sv: 'Svenska',
                tl: 'Tagalog'
            },
            current: 'ms'
        };
    }
};
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
