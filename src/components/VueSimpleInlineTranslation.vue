<script>
export default {
    props: {
        enclosingTag: {
            type: String,
            default: 'span'
        },
        language: String,
        currentLanguage: String
    },
    render(h) {
        if (this.language === this.currentLanguage) {
            return this.$slots.default.length === 1
                ? this.$slots.default[0]
                : h(this.enclosingTag, this.$slots.default);
        }
        return this._v('');
    }
};
</script>
