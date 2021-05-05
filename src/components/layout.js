import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from 'styled-normalize'

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

import Header from "./header"
import CustomCursor from "./cursor"
import Navigation from "./navigation"
import Footer from "./footer"

const GlobalStyles = createGlobalStyle`

${normalize}

* {
  text-decoration: none;
  cursor: none;
  padding: 0;
  margin: 0;
}


html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 10px;
}

body {
  font-family: 'Poppins', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [hamburgerPosition, setHamburgerPosition] = React.useState({
    x: 0,
    y: 0,
  })

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: "#ea281e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  }

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: "#ea281e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`
  }

  const { currentTheme, cursorStyle } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyle.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition} setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation
        toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
