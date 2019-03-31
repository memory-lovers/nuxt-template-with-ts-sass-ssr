# Nuxt.js Template using TypeScript Sass, i18n, SSR on Firebase Cloud Functions

A Nuxt.js Template using below:

1. [Nuxt.js](https://nuxtjs.org/)
2. [TypeScript](https://www.typescriptlang.org/)
3. [Sass](https://sass-lang.com/)
4. [Buefy](https://buefy.org/): is integrate [Bulma](https://bulma.io/)
5. [nuxt-i18n](https://github.com/nuxt-community/nuxt-i18n): is integrate [vue-i18n](https://github.com/kazupon/vue-i18n) and [vue-i18n-loader](https://github.com/kazupon/vue-i18n-loader)
6. [Sitemap Modules](https://github.com/nuxt-community/sitemap-module)
7. [Google Analitics Module](https://github.com/nuxt-community/analytics-module)
8. SSR on [Firebase Cloud Functions](https://firebase.google.com/docs/functions/)
9. Auto Deploy using [CirecleCI](https://circleci.com/)

## Motivation

nuxt and nuxt-i18n are GREATE softoware, but difficult to set up...  
Therefore, we have put together one template and frequently used ones so that projects corresponding to SEO and internationalization can be launched easily.

## Install

Please checkout or download this repository.

## Setup

### env.js

Please change your confingures for `env.development.js` and `env.production.js`.

- `env.development.js` ... use in development mode; ex. `nuxt` command
- `env.production.js` ... use in production mode; ex. `nuxt build` command

```javascript
module.exports = {
  baseUrl: "http://localhost:3000",
  contactFormUrl: "TODO_YOUR_CONTACT_FORM_URL",
  policyUrl: "TODO_YOUR_PRIVACY_POLICY_URL",
  tosUrl: "TODO_YOUR_TERMS_OF_SERVICE_URL",
  twitterUrl: "TODO_YOUR_TWITTER_URL",
  firebaseConfig: "TODO_YOUR_FIREBASE_CONFIG",
  GA_ID: "TODO_YOUR_GOOGLE_ANALYTICS_ID"
};
```

Each values is:

- `baseUrl`: base URL of your site
- `contactFormUrl`: contact form URL for your site
- `policyUrl`: privacy policy page for your site
- `tosUrl`: terms of service page for your site
- `twitterUrl`: twitter URL for you
- `firebaseConfig`: firebase config json for you
- `GA_ID`: Google Analitics Tracking ID for you

### commonHead.js

`commonHead.js` is described common html head.  
Please change the following variables according to your setting.  
Default values is:

```javascript
const keyword = "MemoryLovers,めもらば";
const copryright = "&copy; 2019 Memory Lovers.";
const twitterId = "@MemoryLoverz";
```

### .circleci/config.yml

`commonHead.js` is described config for Cirecle CI.  
Please change the following variables according to your setting.  

```yaml
environment:
  FIREBASE_PROJECT: YOUR_FIREBASE_PROJECT_ID
  FIREBASE_TOKEN: YOUR_FIREBASE_TOKEN
```

## Usage

### Commands

#### Dev

```sh
# launch dev mode
npm run dev
```

#### Build

```sh
# build
$ npm run build
```

#### Serve

```sh
# build & launch firebase serve
$ npm run build && npm run serve
```

#### Deploy

```sh
# if you need
$ firebase use

# build & deploy
$ npm run build && npm run deploy
```

### Customize

#### Custome Scss for Buefy

Please see `app/assets/css/buefy.scss`.

#### Change Messages

Please see `app/assets/msg/common.json`  
And, you can use `<i18n>` in each `.vue` files. Please see [vue-i18n-loader](https://github.com/kazupon/vue-i18n-loader).

#### Change HTML Head

Please see:

1. `commonHead.js` ... Common HTML head: use in all pages.
2. `app/mixins/HeadMixinx.ts` ... mixins HTML head: use in each pages.

`HeadMixinx.ts` generates HTML head based on `headInfo(): HeadInfo` of each page.

ex: `headInfo()` of `IndexPage` return message keys of title adn description.

```typescript
export default class IndexPage extends mixins(HeadMixin) {
  name:string = 'HomePage';

  public headInfo(): HeadInfo {
    return {
      title: "home_title",
      description: "home_details"
    };
  }
}
```

## Licence

[MIT](https://github.com/memory-lovers/nuxt-template-with-ts-sass-ssr/blob/master/LICENCE)

## Author

Memory Lovers ([GitHub](https://github.com/memory-lovers) / [WebSite](https://memory-lovers.com/) / [Twitter](https://twitter.com/MemoryLoverz))

## PR

We develop [Trans-Notes](https://trans-notes.net/) is web service.  
Trans-Notes　is a web service with the following features:

1. Tanslate multi language at once
2. Manage base message and translated messages
3. Export multi format: ex. Android XML, CSV and "nuxt-i18n JSON"!!

We think that using Trans-Notes makes internationalization easier.  
Sorry, we don't ready English version yet.. Now we are preparing an English version.  
Please try it!!