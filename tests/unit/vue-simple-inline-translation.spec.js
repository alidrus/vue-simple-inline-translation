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

    it('enclosed by <span> tag if slot contains HTML elements', () => {
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
});
