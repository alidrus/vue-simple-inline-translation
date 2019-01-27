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

    it('renders text and html enclosed by the specified tag if enclosingTag is set and slot contains HTML elements', () => {
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
});
