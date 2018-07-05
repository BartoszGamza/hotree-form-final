# hotree-form-full

> Frontend task for Monterail

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## What I have done: ##

> Used technologies :

  * VueJs with Webpack template
  * Vuex
  * Vuelidate
  * MomentJs
  * Stylus

> Deployed on [Netlify](https://hotree-form.netlify.com/)

> Differences from designs and task description :

  * Select "Responsible" is not a mandatory field. Since it has to be pre-selected, and is possible to change only to given values its validation is pointless. Marta suggested using a fake placeholder, but I decided to stick more to the requirements where it was emphasised to be a default option.
  * Mandatory "*" signs only appear when (required) fields are empty.
  * I have limited Fee, Reward (between 0 and 100) and Duration (1-12) fields to prevent surrealistic inputs
  * Box-shadows slightly differ

>What I would change :

  * It would be possible to use Router instead of v-if (in Form component)
  * Date and time pickers. Current defalut HTML ones won't work on Firefox and (mobile) Safari
  * Selects
  * Responsive design


_Original repository: https://github.com/BartoszGamza/hotree-form_