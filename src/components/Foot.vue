<template>
  <app-footer>
    <author>{{author}}</author>
    <p v-for="(link, index) in links" :key="`product-desctiption-${index}`">
        <linked target="_blank" v-bind:href="link.url">{{link.name}}</linked><slash v-if="index != links.length - 1">/</slash>
    </p>
  </app-footer>
</template>

<script>
import styled from 'vue-styled-components'
import { Linked } from './styles/Text.ts'
import { Wrapper } from './styles/Ui.ts'

const AppFooter = Wrapper.extend`
  width: 100%;
  margin: 64px auto;
  display: flex;
  font-size: 18px;
  font-weight: bold;
`

const Author = styled.p`
  margin-right: 36px;
`

const Slash = styled.span`
  margin: 0 8px;
`

export default {
  components: {
    Linked,
    AppFooter,
    Author,
    Slash
  },
  props: {
    author: String,
    links: Array
  }
}
</script>
