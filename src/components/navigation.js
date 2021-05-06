import React from 'react'
import { Link } from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'
import { Container, Flex } from '../styles/globalStyles'
import { Nav, NavHeader, NavFooter, CloseNav, NavList, NavVideo } from '../styles/navigationStyles'
import featuredVideo from '../assets/video/featured-video.mp4'
import easy from '../assets/video/easy.mp4'
import makeItZero from '../assets/video/make-it-zero.mp4'
import itTakesAnIsland from '../assets/video/it-takes-an-island.mp4'
import beaches from '../assets/video/50-beaches.mp4'
import { FooterContent, FooterSocial } from '../styles/footerStyles'
import { Instagram, Facebook, Vimeo } from '../assets/svg/social-icons'

const navRoutes = [
    { id: 0, title: 'not humble', path: '/not-humble', video: featuredVideo },
    { id: 1, title: 'bleeping easy', path: '/bleeping-easy', video: easy },
    { id: 2, title: 'make it zero', path: '/make-it-zero', video: makeItZero },
    { id: 3, title: 'it takes an island', path: '/it-takes-an-island', video: itTakesAnIsland },
    { id: 4, title: '50 beaches', path: '/50-beaches', video: beaches },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
    const [revealVideo, setRevealVideo] = React.useState({
        show: false,
        video: '',
        key: '0'
    })

    return (
        <>
            <AnimatePresence>
                {toggleMenu && (
                    <Nav
                        initial={{ x: '-100%' }}
                        exit={{ x: '-100%' }}
                        animate={{ x: toggleMenu ? 0 : '-100%' }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
                    >
                        <Container>
                            <NavHeader>
                                <Flex spaceBetween noHeight>
                                    <h2>Projects</h2>
                                    <CloseNav onClick={() => setToggleMenu(!toggleMenu)}
                                        onMouseEnter={() => onCursor('pointer')} onMouseLeave={onCursor}
                                    >
                                        <button>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </CloseNav>
                                </Flex>
                            </NavHeader>
                            <NavList>
                                <ul>
                                    {navRoutes.map((item) =>
                                        <motion.li onHoverStart={() => setRevealVideo({ show: true, video: item.video, key: item.id })} key={item.id}
                                            onHoverEnd={() => setRevealVideo({ show: false, video: item.video, key: item.id })} key={item.id}
                                            onMouseEnter={() => onCursor('pointer')} onMouseLeave={onCursor}
                                        >
                                            <Link to={`/projects/${item.path}`}>
                                                <motion.div
                                                    initial={{ x: -95 }} whileHover={{ x: -40, transition: { duration: .4, ease: [.6, .05, -.01, .9] } }}
                                                    className='link'>
                                                    <span className='arrow'>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 101 57"
                                                        >
                                                            <path
                                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                                fill="#FFF"
                                                                fillRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                    {item.title}
                                                </motion.div>
                                            </Link>
                                        </motion.li>
                                    )}
                                </ul>
                            </NavList>
                            <NavFooter>
                                <Flex spaceBetween column>
                                    <FooterContent>
                                        <p>info@furrow.studio</p>
                                    </FooterContent>
                                    <FooterContent wider>
                                        <p>902.315.1234</p>
                                    </FooterContent>
                                    <FooterSocial>
                                        <a onMouseEnter={() => onCursor('pointer')}
                                            onMouseLeave={onCursor}
                                            href="">
                                            <Instagram />
                                        </a>
                                        <a onMouseEnter={() => onCursor('pointer')}
                                            onMouseLeave={onCursor}
                                            href="">
                                            <Facebook />
                                        </a>
                                        <a onMouseEnter={() => onCursor('pointer')}
                                            onMouseLeave={onCursor}
                                            href="">
                                            <Vimeo />
                                        </a>
                                    </FooterSocial>
                                </Flex>
                            </NavFooter>
                            <NavVideo>
                                <motion.div animate={{ width: revealVideo.show ? 0 : "100%" }} className='reveal'></motion.div>
                                <div className='video'>
                                    <AnimatePresence initial={false} exitBeforeEnter>
                                        <motion.video
                                            key={revealVideo.key}
                                            src={revealVideo.video}
                                            loop autoPlay muted />
                                    </AnimatePresence>
                                </div>
                            </NavVideo>
                        </Container>
                    </Nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
