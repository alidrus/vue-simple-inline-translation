# @alidrus/vue-simple-inline-translation
A Vue component that simplifies the way text is translated: by translating it inline.

## Usage

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
            current: 'en'
        };
    }
}
</script>
```

## Installation

With npm:
```bash
npm install @alidrus/vue-simple-inline-translation
```

With yarn:
```bash
yarn add @alidrus/vue-simple-inline-translation
```
