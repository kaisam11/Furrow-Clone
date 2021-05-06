import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const Nav = styled(motion.nav)`
    position: fixed;
    top:0;
    left:0;
    width:100%;height:100%;
    background: ${props => props.theme.red};
    color:#000;
    z-index: 100;
    overflow: hidden;
`

export const NavHeader = styled.div`
    top: 7.2rem;
    position: relative;
    margin-bottom: 2.5rem;

    h2 {
        color: ${props => props.theme.background};
        font-weight: 700;
    }

    @media (max-width: 700px) {
        top: 4rem;
    }
`

export const CloseNav = styled.div`
    button {
        transform-origin: center;
        border: none;
        background: none;
        outline: none;

        span {
            width: 3.5rem;
            height: 7px;
            display: block;
            background-color: ${props => props.theme.background};
            margin: .8rem;

            &:first-of-type {
                transform: rotate(45deg);
                transform-origin: 17px 11px;
            }

            &:last-of-type {
                transform: rotate(-45deg);
                transform-origin: 4px -7px;
            }
        }
    }
`

export const NavList = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        width: 100vw;
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            font-size: 4.8rem;
            text-transform: uppercase;
            font-weight: 900;
            height: 9rem;
            overflow: hidden;

            
            @media (max-width: 700px) {
                font-size: 3rem;
                height: 5rem;
            }

            @media (max-width: 500px) {
                font-size: 2.2rem;
            }

            .link {
                color: ${props => props.theme.background};
                position: relative;
                display: flex;
                align-items: flex-start;
                
                .arrow {
                    height: 7.6rem;
                    margin-right: .8rem;

                    svg {
                        width: 9rem;

                        path {
                            fill: ${props => props.theme.background};
                        }
                    }
                }

                @media (max-width: 800px) {
                    .arrow {
                        svg {
                            width: 9rem;

                                path{
                                    fill: transparent;
                            }

                        }
                    }
                }
            }
        }
    }

`

export const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 95%;
    padding: 2.5rem 0px;

    p {
        color: ${props => props.theme.background}
    }

    svg path{
        fill: ${props => props.theme.background};
    }
`

export const NavVideo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25%;
    z-index: -1;
    height: 100%;
    width: 100%;
    
    @media (max-width: 1024px){
        display: none;
    }

    .reveal {
        width: 100%;
        background: ${props => props.theme.red};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }

    .video {
        background: transparent;
        position: absolute;
        height: 100%;
        margin: 0;
        z-index: -1;

        video {
            height: 100%;
        }
    }
`