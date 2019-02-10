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

        <p>
            Hello! My language is <b>{{ languages[current] }}</b> and the way I say welcome is:
            <translate v-bind:current-language="current" language="ar"><b>اهلا و سهلا</b></translate>
            <translate v-bind:current-language="current" language="en"><b>Welcome</b></translate>
            <translate v-bind:current-language="current" language="ms"><b>Selamat Datang</b></translate>
            <translate v-bind:current-language="current" language="sv"><b>Välkommen</b></translate>
            <translate v-bind:current-language="current" language="tl"><b>Maligayang Pagdating</b></translate>
        </p>

        <translate enclosing-tag="p" v-bind:tag-class="{ italic: true }" v-bind:current-language="current" language="ar">
            فقرة باللغة <b>العربية</b> بالنمط <b>المائل</b>
        </translate>
        <translate enclosing-tag="p" v-bind:tag-class="{ italic: true }" v-bind:current-language="current" language="en">
            A paragraph in <b>English</b> with <b>italic</b> style.
        </translate>
        <translate enclosing-tag="p" v-bind:tag-class="{ italic: true }" v-bind:current-language="current" language="ms">
            Perenggan dalam <b>Bahasa Melayu</b> menggunakan stail <b>italic</b>.
        </translate>
        <translate enclosing-tag="p" v-bind:tag-class="{ italic: true }" v-bind:current-language="current" language="sv">
            En punkt på <b>Svenska</b> med <b>kursiv</b> stil.
        </translate>
        <translate enclosing-tag="p" v-bind:tag-class="{ italic: true }" v-bind:current-language="current" language="tl">
            Isang talata sa <b>Tagalog</b> na may estilong <b>italiko</b>.
        </translate>

        <translate enclosing-tag="p" v-bind:force-tag="true" v-bind:tag-style="{ 'text-align': 'center', 'border': '1px dashed red' }" v-bind:current-language="current" language="en">
            (In English Only) This will be enclosed in a center-aligned bordered
            "p" tag, even though it is a purely text node with no embedded
            HTML. You can achieve this by setting the "force-tag" prop true.
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
        </translate>
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
            current: 'en',
            tagProperties: {
                attrs: {
                    class: 'italic'
                }
            }
        };
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 20px;
}
.italic {
    font-style: italic;
}
.small-print {
    font-size: 8pt;
}
</style>
