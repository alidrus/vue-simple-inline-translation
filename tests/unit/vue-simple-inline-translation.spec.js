import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import VueSimpleInlineTranslation from '@/components/VueSimpleInlineTranslation.vue';

describe('VueSimpleInlineTranslation.vue', () => {
    it('renders the text if props.language matches props.currentLanguage', () => {
        const text = 'Hello World';
        const currentLanguage = 'en';
        const language = 'en';
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: { currentLanguage, language },
            slots: {
                default: text
            }
        });
        expect(wrapper.text()).to.include(text);
    });

    it('renders blank text if props.language does not matches props.currentLanguage', () => {
        const text = 'Hello World';
        const currentLanguage = 'ms';
        const language = 'en';
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: { currentLanguage, language },
            slots: {
                default: text
            }
        });
        expect(wrapper.isEmpty()).to.equal(true);
    });

    it('renders text and html enclosed by <span> tag if slot contains HTML elements', () => {
        const text = 'Hello there <b>World</b>';
        const currentLanguage = 'en';
        const language = 'en';
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: { currentLanguage, language },
            slots: {
                default: text
            }
        });
        expect(wrapper.is('span')).to.equal(true);
    });

    it('renders text and html enclosed by the enclosingTag if it is set', () => {
        const text = 'Hello there <b>World</b>';
        const currentLanguage = 'en';
        const language = 'en';
        const enclosingTag = 'p';
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: { currentLanguage, language, enclosingTag },
            slots: {
                default: text
            }
        });
        expect(wrapper.is(enclosingTag)).to.equal(true);
    });

    it('renders text enclosed by <span> tag if force-tag prop set to true', () => {
        const text = 'Hello World';
        const currentLanguage = 'en';
        const language = 'en';
        const forceTag = true;
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: { currentLanguage, language, forceTag },
            slots: {
                default: text
            }
        });
        expect(wrapper.is('span')).to.equal(true);
    });

    it('renders enclosing tag with specified class attribute', () => {
        const text = 'Hello there <b>World</b>';
        const currentLanguage = 'en';
        const language = 'en';
        const enclosingTag = 'p';
        const tagClass = {
            'has-text-bold': true
        };
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: {
                currentLanguage,
                language,
                enclosingTag,
                tagClass
            },
            slots: {
                default: text
            }
        });
        expect(wrapper.attributes('class')).to.equal('has-text-bold');
    });

    it('renders enclosing tag with specified style attribute', () => {
        const text = 'Hello there <b>World</b>';
        const currentLanguage = 'en';
        const language = 'en';
        const enclosingTag = 'p';
        const tagStyle = {
            'text-align': 'center'
        };
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: {
                currentLanguage,
                language,
                enclosingTag,
                tagStyle
            },
            slots: {
                default: text
            }
        });
        expect(wrapper.attributes('style')).to.equal('text-align: center;');
    });

    it('renders enclosing tag with specified attributes', () => {
        const text = 'Hello there <b>World</b>';
        const currentLanguage = 'en';
        const language = 'en';
        const enclosingTag = 'td';
        const tagAttributes = {
            colspan: '2',
            rowspan: '3'
        };
        const wrapper = mount(VueSimpleInlineTranslation, {
            propsData: {
                currentLanguage,
                language,
                enclosingTag,
                tagAttributes
            },
            slots: {
                default: text
            }
        });
        expect(wrapper.attributes('colspan')).to.equal('2');
        expect(wrapper.attributes('rowspan')).to.equal('3');
    });
});
