import * as React from "react"
import { Link } from "gatsby"
import { HeaderNav, Logo, Menu } from '../styles/headerStyles'
import { Container, Flex } from '../styles/globalStyles'
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'
import useElementPosition from '../hooks/useElementPosition'

const Header = ({ onCursor, setToggleMenu, toggleMenu, setHamburgerPosition }) => {
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const hamburger = React.useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
    }

    else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
    }
  }

  const menuHover = () => {
    onCursor('locked')
    setHamburgerPosition({ x: position.x, y: position.y + 72 })
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }} transition={{ duration: 1, ease: [.6, .05, -.01, .9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link to='/'>FURR</Link>
            <span onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={onCursor}
            ></span>
            <Link to='/'>W</Link>
          </Logo>
          <Menu ref={hamburger} onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover} onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
