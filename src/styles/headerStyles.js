import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 7.2rem;
  right: 0;
  left: 0;
  z-index: 99;

  @media (max-width: 700px) {
    top: 4rem;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: .2rem;
    background: none;
    outline: none;

    span {
      height: 7px;
      width: 3.5rem;
      display: block;
      background-color: ${props => props.theme.text};
      margin: .8rem;

      @media (max-width: 700px) {
        width: 3.5rem;
        height: 4px;
      }
    }
  }
`

export const Logo = styled.div`
  a {
    font-size: 2.8rem;
    font-weight: 600;
    color: ${props => props.theme.text}
  }

  span {
    height: 1.6rem;
    width: 1.6rem;
    background-color: ${props => props.theme.red};
    margin: 0 .4rem;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: .2rem;
  }
`

