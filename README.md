# @alidrus/vue-simple-inline-translation
A Vue component that simplifies the way text is translated: by translating it inline.

[![Build Status](https://travis-ci.org/alidrus/vue-simple-inline-translation.svg?branch=master)](https://travis-ci.org/alidrus/vue-simple-inline-translation)

## Installation

With npm:
```bash
npm install @alidrus/vue-simple-inline-translation
```

With yarn:
```bash
yarn add @alidrus/vue-simple-inline-translation
```

## Usage Example

```HTML
<template>
    <h1>
        <translation :current-language="current" language="en">Welcome</translation>
        <translation :current-language="current" language="ms">Selamat Datang</translation>
        <translation :current-language="current" language="tl">Maligayang Pagdating</translation>
    </h1>
</template>

<script>
import { VueSimpleInlineTranslation } from '@alidrus/vue-simple-inline-translation';

export default {
    components: {
        translation: VueSimpleInlineTranslation
    },
    data() {
        return {
            current: 'ms'
        };
    }
}
</script>
```

## Output (in HTML)

The usage example above produces the following output:
```HTML
<h1>Selamat Datang</h1>
```

For a more extensive example, check App.vue in the *example/* folder.

## Feature (and Caveat)
You can embed plain text and some HTML tags within the `<translation>` block. I
recommend it only for typesetting purposes (bold, italic, etc) though. Due to
the fact that you cannot have multiple root elements within a component
template, having tags in the enclosed text will add a `<span>` block around it.

For example:
```HTML
<template>
    <h1>
        <translation current-language="en" language="en">Welcome to my <b>web site</b></translation>
        <translation current-language="en" language="ms">Selamat Datang ke <b>laman web</b> saya</translation>
        <translation current-language="en" language="tl">Maligayang Pagdating sa aking <b>website</b></translation>
    </h1>
</template>
```
will result in the following output:
```HTML
<h1><span>Welcome to my <b>web site</b></span></h1>
```

:new: You can now specify the enclosing tag to use instead of the default
`<span>` by specifying the prop `enclosing-tag`:
```HTML
    <translation enclosing-tag="div" current-language="en" language="en">This will be enclosed within a <b>div</b> tag.</translation>
```
