<template>
  <background>
    <wrapper>
      <container>
        <text-container>
          <heading>{{ author }}</heading>
          <subtitle>A passionate frontend developer.</subtitle>
          <paragraph>Creating reliable, everyway responsive
            <linked href="/#products">web apps</linked>
            and bringing ideas to life with enthusiasm.
          </paragraph>
          <social-links>
            <social-link-text>
              <linked href="https://github.com/TroAlexis" target="_blank">
                <i class="fab fa-github"></i>
                Github
              </linked>
            </social-link-text>
          </social-links>
        </text-container>
      </container>
    </wrapper>
  </background>
</template>

<script>
import { Linked } from './styles/Text.ts'
import { Wrapper } from './styles/Ui.ts'
import styled from 'vue-styled-components'
import { Subtitle, Paragraph } from './styles/Text.ts'

const Background = styled.div`
  position: relative;
  background: ${({theme}) => theme.hero.background.image};
  background-size: cover;
  background-position: 0, 50%;
  background-repeat: no-repeat;
  width: 100%;
    //min-width: ${({theme}) => theme.screen.width.mobile}px;
  margin: auto;

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1080px;
    // @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
  //   background-position: 0, 50% -320px;
  //   background-size: inherit;
  // }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    background-position: 0, 60% 0;
    background-size: auto, auto calc(100% + 125px);
  }
`

const Container = styled.div`
  position: relative;
  z-index: 1;
  /* padding-top: 180px; */

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextContainer = styled.div`
  max-width: 355px;
  /* Responsive */
  margin-top: -20px;
`

const Subheading = styled.h2`
  font-size: 18px;
  margin: 16px 0px;
  font-weight: 300;
`

const Heading = styled.h1`
  font-size: 92px;
  margin: 32px auto;
  font-weight: bold;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    font-size: 72px;
  }
`

const SocialLinks = styled.div`
  margin: 36px 0px;
  display: flex;
`

const SocialLinkText = styled(Subheading)`
  margin-right: 32px;
  font-weight: bold;
`

export default {
  components: {
    Wrapper,
    Linked,
    Background,
    Container,
    TextContainer,
    SocialLinks,
    SocialLinkText,
    Heading,
    Subtitle,
    Paragraph
  },
  props: {
    author: String
  }
}
</script>
