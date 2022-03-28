<template>
  <theme-provider :theme="theme">
    <hero
        v-bind:author="author"
    />
    <wrapper id="products">
      <card-category v-for="({ category, projects }, index) in products" :key="index" :first="index === 0">
        <category-heading>{{ category }}</category-heading>
        <card
            v-for="(project, cardIndex) in projects"
            :key="cardIndex"
            v-bind="project"
        />
      </card-category>
    </wrapper>
    <foot v-bind:author="author" v-bind:links="links"/>
    <light-toggle v-on:click="toggleTheme()">
      <span v-if="!isDark">💡</span>
      <span v-if="isDark">💡</span>
    </light-toggle>
  </theme-provider>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import Foot from './components/Foot.vue'
import { Wrapper } from './components/styles/Ui.ts'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import baseData from './data/fixtures.ts'
import light from './themes/light.ts'
import dark from './themes/dark.ts'
import {formatPublicPath} from './js/utils';

const localStore = Vue.observable({
  dark: false
})

const mutations = {
  toggleDark() {
    localStore.dark = !localStore.dark
  },
  setDark(isDark) {
    localStore.dark = isDark
  }
}

// Hack until createGlobalStyles comes to vue-styled-components
const adjustTheme = () => {
  var html = document.getElementsByTagName('html')[0]
  var body = document.getElementsByTagName('body')[0]
  if (localStore.dark) {
    body.style.setProperty("--main-color", dark.color.text)
    body.style.setProperty("--main-link-color", dark.color.link)
    html.style.setProperty("--main-background-color", dark.color.background)
  } else {
    body.style.setProperty("--main-color", light.color.text)
    body.style.setProperty("--main-link-color", light.color.link)
    html.style.setProperty("--main-background-color", light.color.background)
  }
}

if (window.matchMedia) {
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(e.matches) {
          localStore.dark = true
        } else {
          localStore.dark = false
        }
        adjustTheme()
    })
  } catch(e) {
    console.error(e)
  }
}

const BASE_URL = formatPublicPath(process.env.BASE_URL);

injectGlobal`
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    src: url("${BASE_URL}/fonts/SFProDisplay-Regular.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 700;
    src: url("${BASE_URL}/fonts/SFProDisplay-Bold.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 300;
    src: url("${BASE_URL}/fonts/SFProDisplay-Light.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    font-style: italic;
    src: url("${BASE_URL}/fonts/SFProDisplay-RegularItalic.ttf");
  }

  html {
    font-family: 'SF Pro Display', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    color: var(--main-link-color, #3B70A2);
    text-decoration: none;
    position: relative;
  }
`
const CardCategoryProps = { first: Boolean }


const CardCategory = styled('div', CardCategoryProps)`
  padding-top: ${props => props.first ? '60px' : '0'};
`

const CategoryHeading = styled.h3`
  margin-top: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  margin-bottom: 24px;
  font-size: 40px;
  @media screen and (min-width: 320px) {
    font-size: calc(40px + 14 * ((100vw - 320px) / 680));
  }
  @media screen and (min-width: 1000px) {
    font-size: 54px;
  }
`

const LightToggle = styled.button`
  border: none;
  background: transparent;
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
  transform: translateY(0px);
  transition: 0.3s transform ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition: 0.2s transform ease-out;
  }
`

export default {
  name: 'App',
  components: {
    Wrapper,
    Hero,
    Card,
    Foot,
    ThemeProvider,
    CardCategory,
    CategoryHeading,
    LightToggle
  },
  computed: {
    theme() {
      return localStore.dark ? dark : light
    },
    isDark() {
      return localStore.dark
    }
  },
  methods: {
    toggleTheme: () =>{
      mutations.toggleDark()
      adjustTheme()
    },
  },
  data: () => ({
    ...baseData
  }),
  mounted() {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStore.dark = true
    } else {
      localStore.dark = false
    }
    adjustTheme()
    // Avoid buggy animations
    setTimeout(() => {
      var html = document.getElementsByTagName('html')[0]
      html.style.setProperty("transition", "0.3s color")
      var body = document.getElementsByTagName('body')[0]
      body.style.setProperty("transition", "0.3s color")
    }, 300)
  }
}
</script>

<style>
/* Hack until createGlobalStyles comes to vue-styled-components */
* {
  box-sizing: border-box;
}
html {
  background: var(--main-background-color);
}

body {
  color: var(--main-color);
}
</style>
