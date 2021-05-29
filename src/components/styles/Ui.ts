import styled from 'vue-styled-components'

export const Wrapper = styled.div`
  max-width: ${({theme}) => theme.screen.width.desktop + theme.screen.padding.desktop * 2}px;
  padding: 0 ${({theme}) => theme.screen.padding.desktop}px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 0 ${({theme}) => theme.screen.padding.tablet}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    padding: 0 ${({theme}) => theme.screen.padding.mobile}px;
  }
  margin-left: auto;
  margin-right: auto;
`