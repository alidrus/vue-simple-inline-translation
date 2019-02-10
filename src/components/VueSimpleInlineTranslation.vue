<script>
export default {
    props: {
        enclosingTag: {
            type: String,
            default: 'span'
        },
        forceTag: {
            type: Boolean,
            default: false
        },
        tagClass: {
            type: Object,
            default() {
                return {};
            },
            validator(obj) {
                // empty object is valid
                if (Object.keys(obj).length === 0) {
                    return true;
                }
                // if non-empty
                return Object.keys(obj).every(key => typeof obj[key] === 'boolean');
            }
        },
        tagStyle: {
            type: Object,
            default() {
                return {};
            },
            validator(obj) {
                // empty object is valid
                if (Object.keys(obj).length === 0) {
                    return true;
                }
                // if non-empty
                return Object.keys(obj).every(key => typeof obj[key] === 'string');
            }
        },
        tagAttributes: {
            type: Object,
            default() {
                return {};
            },
            validator(obj) {
                // empty object is valid
                if (Object.keys(obj).length === 0) {
                    return true;
                }
                // if non-empty
                return Object.keys(obj).every(key => typeof obj[key] === 'string');
            }
        },
        language: String,
        currentLanguage: String
    },
    render(h) {
        if (this.language === this.currentLanguage) {
            const dataObject = {};
            if (Object.keys(this.tagClass).length > 0) {
                dataObject.class = this.tagClass;
            }
            if (Object.keys(this.tagStyle).length > 0) {
                dataObject.style = this.tagStyle;
            }
            if (Object.keys(this.tagAttributes).length > 0) {
                dataObject.attrs = this.tagAttributes;
            }
            console.dir({
                slots: this.$slots.default,
                tag: this.enclosingTag
            });
            return this.$slots.default.length === 1 && this.forceTag === false
                ? this.$slots.default[0]
                : h(this.enclosingTag, dataObject, this.$slots.default);
        }
        return this._v('');
    }
};
</script>
