<script>
export default {
    props: {
        language: String,
        currentLanguage: String
    },
    render(h) {
        if (this.language === this.currentLanguage) {
            return this.$slots.default.length === 1
                ? this.$slots.default[0]
                : h('span', this.$slots.default);
        }
        return this._v('');
    }
};
</script>
