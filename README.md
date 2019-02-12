# @alidrus/vue-simple-inline-translation

A Vue component that simplifies the way text is translated: by translating it inline.

[![npm downloads](https://img.shields.io/npm/dt/@alidrus/vue-simple-inline-translation.svg?colorB=green&label=downloads&style=flat)](https://www.npmjs.com/package/@alidrus/vue-simple-inline-translation)
[![npm version](https://img.shields.io/npm/v/@alidrus/vue-simple-inline-translation.svg?style=flat)](https://www.npmjs.com/package/@alidrus/vue-simple-inline-translation)
[![license](https://img.shields.io/github/license/alidrus/vue-simple-inline-translation.svg?style=flat)](https://tldrlegal.com/license/mit-license)
[![issues](https://img.shields.io/github/issues/alidrus/vue-simple-inline-translation.svg?style=flat)](https://github.com/alidrus/vue-simple-inline-translation/issues)
[![Build Status](https://travis-ci.org/alidrus/vue-simple-inline-translation.svg?branch=master)](https://travis-ci.org/alidrus/vue-simple-inline-translation)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/alidrus/vue-simple-inline-translation.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/alidrus/vue-simple-inline-translation/alerts/)

## Motivation

From my observation throughout the years, I have noticed that in most (or all)
translation systems, translated strings are looked up from an array or object
which has to be maintained separately from the markup. While working on
translating a page, one often has to open a split view in the editor to find
the corresponding string to look up in the current portion of the markup. As a
result, it becomes a little bit confusing for the person writing content (and
markup) as they would need to keep things in sync and remember which lookup
keys or symbols go into which portions of the page.

So I wondered, what if there was a way to put the translations inline so that
you can have the translated content and the original content placed side by
side in the page's markup. This is where *vue-simple-inline-translation* comes
in to the rescue.

## Installation

With npm:
```bash
npm install @alidrus/vue-simple-inline-translation
```

With yarn:
```bash
yarn add @alidrus/vue-simple-inline-translation
```

## Usage Examples:

The following is a simple example:
```HTML
<template>
    <h1>
        <translate :current-language="current" language="en">Welcome</translate>
        <translate :current-language="current" language="ms">Selamat Datang</translate>
        <translate :current-language="current" language="tl">Maligayang Pagdating</translate>
    </h1>
</template>

<script>
import { VueSimpleInlineTranslation } from '@alidrus/vue-simple-inline-translation';

export default {
    components: {
        translate: VueSimpleInlineTranslation
    },
    data() {
        return {
            current: 'ms'
        };
    }
}
</script>
```

Output (in HTML markup):
```HTML
<h1>Selamat Datang</h1>
```

When the translation text contains HTML markup, it will automatically be
enclosed within a `<span>` block by default. However, you can change the
enclosing tag using the `enclosing-tag` attribute. For example, the following
two translation blocks
```HTML
<template>
    <p>
        <translate :current-language="current" language="en">
            To <b>boldly</b> go where no translation has gone before.
        </translate>
    </p>

    <translate enclosing-tag="p" :current-language="current" language="en">
        <span>To <b>boldly</b> go where no translation has gone before.</span>
    </translate>
</template>
```
would produce the same HTML markup:
```HTML
<p><span>To <b>boldly</b> go where no translation has gone before.</span></p>
```

For a more detailed example, check App.vue in the *example/* folder.

## Available props

| Prop             | Type      | Default | Description                                                                                                        |
| ---------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| current-language | `String`  |         | Current language.                                                                                                  |
| language         | `String`  |         | Language of the translated text.                                                                                   |
| enclosing-tag    | `String`  | `span`  | HTML tag used to enclose the translated text. By default, only applied when translation text contains HTML markup. |
| force-tag        | `Boolean` | `false` | Force enclosing tag to be used even when translation is plain text without markup.                                 |
| tag-class        | `Object`  | `{}`    | CSS classes to apply to the enclosing tag. Same format as v-bind:class using an object.                            |
| tag-style        | `Object`  | `{}`    | CSS styles to apply to the enclosing tag. Same format as v-bind:style using an object.                             |
| tag-attributes   | `Object`  | `{}`    | The enclosing tag's HTML attributes (property-value pairs).                                                        |

### Common mistakes when setting prop values

#### no `v-bind`
Not using `v-bind` (or the `:` shorthand) to set `current-language`,
`force-tag`, `tag-class`, `tag-style` and `tag-attributes` properties.

For example:
```HTML
<translate … force-tag="true" … >
```
will set the force-tag prop to the string value `"true"` instead of boolean
value `true` and this will produce an error when the prop fails to validate.

#### wrong prop type
Using an array for `tag-class`, `tag-style` or `tag-attributes` instead of an object.

For example:
```HTML
<translate … v-bind:tag-class="[ 'has-text-bold', 'is-active' ]" … >
```
will produce an error when the prop fails to validate.

## Patreon

[![sponsor me](https://img.shields.io/badge/sponsor%20me-via%20patreon-yellow.svg)](https://www.patreon.com/alidrus)

If you like what I do and would like to see more of my work, please consider
sponsoring me via my [Patreon](https://www.patreon.com/alidrus) page. I
appreciate each and every contribution that would help me give back to the open
source community without worrying too much about making a living. Patrons who
join the
[Volucris Tier](https://www.patreon.com/join/alidrus/checkout?rid=3324251) will
get a special mention below.

## Sponsors

None Yet.
