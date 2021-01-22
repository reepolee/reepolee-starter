# reepolee-starter

Starter template for [Routify](https://github.com/sveltech/routify) with added [TailwindCSS](https://tailwindcss.com) and localization with [Svelte i18n](https://github.com/kaisermann/svelte-i18n). Image transformation is using [sharp](https://sharp.pixelplumbing.com/) to convert your JPEGs to WebP and AVIF.

**NOTICE**: This template in it's current form depends on modern browser. It uses CSS grid and offers no fallback. It can still be made to run on older browsers, just modify it to your own needs.

![Home Screen](https://github.com/reepolee/reepolee-starter/blob/main/explanation.jpg?raw=true)

## REQUIREMENTS

You'll need `node, npm and git` installed to get this template working.

## GET STARTED

Based on [Routify starter](https://github.com/roxiness/routify-starter), check it out.

```bash
npx degit reepolee/reepolee-starter#main YOUR-APP-NAME
cd YOUR-APP-NAME
npm i
npm run dev
```

## TAILWIND

Add global CSS to `tailwind.css`. For example, all `h1`'s on site will be full width with some padding and large text:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

h1 {
  @apply p-8;
  @apply text-3xl;
  @apply w-full;
}
```

Use it in `class` on different elements, like in `about.svelte`;

```html
<script>
  import { _ } from "svelte-i18n";
  import { metatags } from "@roxi/routify";
  import ModernImage from "@/components/ModernImage.svelte";
  $: metatags.title = $_("about.title");
  $: metatags.description = $_("about.description");
</script>

<h1 class="bg-blue-500 text-white">&lt;h1 class="bg-blue-500 text-white"&gt;</h1>
<div class="p-8">
  <p class="font-bold">{$_('about.description')}</p>
  <p class="mb-8">{@html $_('about.de_not_translated')}</p>
  <p class="mb-8 font-bold">{@html $_('about.content')}</p>
  <p style="padding-bottom:2000px">{$_('about.lazyloading')}</p>
  <ModernImage src="/responsive/reepolee-labs.jpg" alt={$_('app.head.company')} />
  <div class="mb-8" />
  <a href="/">{$_('about.goto.index')}</a>
</div>
```

### Extending the theme

Edit `tailwind.config.js`. For example, here we are adding some of our company colors:

```js
  theme: {
    extend: {
      colors: {
        reepolee: {
          500: "#b40000",
          600: "#9c0000",
          700: "#750000",
        },
      },
    },
  },
```

## LOCALIZATION

There is a folder called `locales` where your translations reside. Each language is a folder with JSON files, separated by concern/functionality. For example, this is Slovenian translation for authorization in `locales/sl/auth.json`:

```json
{
  "auth": {
    "login": {
      "caption": "Prijava",
      "implement": "Implementiraj prijavo",
      "submit": "Prijava",
      "form": {
        "email": {
          "label": "E-pošta"
        },
        "password": {
          "label": "Geslo"
        }
      },
      "error": {
        "generic": "Napaka pri avtentikaciji.",
        "credentials": "Uporabniško ime in geslo se ne ujemata",
        "failedAPICall": "Napaka v komunikaciji s strežnikom"
      }
    },
    "logout": {
      "submit": "Odjava"
    }
  }
}
```

Update `locales/localization.js` as needed and import into `main.js`.

Use as shown earlier, like

```html
<a href="/">{$_('about.goto.index')}</a>
```

## IMAGE HANDLING

There is a fixed folder `assets/images` where all the final images of the app reside. However, the build process takes your content related images from `content/images` and transforms them into `assets/responsive` via `npm run prepareImages` as responsive versions. By default it produces widths of 300, 400, 800, 1200 and 1920px along with optimized original. Use `ModernImage` component instead of `<img>` to gain responsiveness and future formats of WebP and AVIF.

```html
<ModernImage src="/responsive/reepolee-labs.jpg" alt={$_('app.head.company')} />
```

## ICONS

Icons by:

- [Remix Design](https://github.com/Remix-Design/RemixIcon) under Apache 2.0 license
- [Material Design Icons](https://github.com/Templarian/MaterialDesign) under Apache 2.0 license
