import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const Banner = styled.div`
    background: ${props => props.background};
    height: 100vh;
    width: 100%;
    position: relative;
    margin-bottom: 29.6rem;

    @media (max-width: 600px) {
        margin-bottom: 10rem;
    }
`

export const Video = styled.div`
    height: 100%;
    width: 100%;
    
    video {
        object-fit: cover;
    }
`

export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
`

export const BannerTitle = styled(motion.h1)`
    position: absolute;
    bottom: -12rem;
    left: -1.8rem;
    color: ${props => props.theme.text};
    pointer-events: none;

    @media (max-width: 600px) {
        bottom: -5rem;
    }
`

export const Headline = styled(motion.span)`
    display: block;
    font-size: 36.8rem;
    font-weight: 900;
    line-height: .76;

    @media (max-width: 1000px) {
        font-size: 30rem;
    }

    @media (max-width: 800px) {
        font-size: 20rem;
    }

    @media (max-width: 600px) {
        font-size: 15rem;
    }
`

export const HomeContentSection = styled(motion.div)`
    margin-bottom: 20rem;

    @media (max-width: 600px) {
        margin-bottom: 10rem;
    }
`

export const Content = styled.div`
    width: 55%;
    font-size: 3.3rem;
    color: ${props => props.theme.text};
    font-weight: 400;
    margin-left: 12.4rem;

    @media (max-width:1200px) {
        margin-left: 0;
        width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 2rem;
    }

`

export const HomeFeatureSection = styled(motion.div)`
    margin-bottom: 15rem;
    position: relative;

    @media (max-width: 600px) {
            margin-bottom: 10rem;
        }

    a {
        margin-bottom: 20rem;
        position: relative;
        display: block;
    }
`

export const FeaturedContent = styled(motion.div)`
    height: 48rem;
    width: 100%;
    padding: 5.6rem 12.4rem;
    box-sizing: border-box;
    color: ${props => props.theme.text};

    h3 {
        font-size: 2.24rem;
    }

    .meta {
        display: flex;

        h4 {
            &:last-child {
                margin-left: 1.6rem;
            }
        }
    }

    .featured-title {
        position: absolute;
        bottom: -12.8rem;
        font-size: 11.2em;
        font-weight: 900;
        line-height: 9rem;
        margin: 0;

        .arrow {
            width: 12rem;
            height: 8rem;
            display: block;
            position: relative;
            overflow: hidden;

            svg {
                position: absolute;
                top: 1.6rem;
                left: -4.8rem;
                width: 10.8rem;

                path {
                    fill:${props => props.theme.text}
                }
            }
        }
    }

    @media (max-width: 700px) {
        padding: 2rem 3.2rem;

        .featured-title {
            font-size: 7rem;
            line-height: 6rem;
            left: 3.2rem;
        }    
    }
`

export const FeaturedVideo = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 48rem;
    top: 0;
    display: block;
    overflow: hidden;
`

export const FeaturedProject = styled.div`
    margin-top: 20rem;
    button {
        background: ${props => props.theme.red};
        color: #fff;
        position: relative;
        padding: 2rem;
        display: block;
        text-align: left;
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 600;
        border: none;

        span {
            margin-right: 10rem;
            display: block;
        }

        &:before, &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 2rem;
            width: 3.5rem;
            height: .7rem;
            display: block;
            background: #fff;
            transform: translateY(-50%);
        }

        &:before {
            margin-top: -.8rem;
        }

        &:after {
            margin-top: .8rem;
        }

    }
`

export const HomeAboutSection = styled(motion.div)`

`

export const About = styled.div`
    width: 100%;

    h2 {
        width: 60%;
        font-size: 3.68rem;
        font-weight: 400;
        margin-left: 12.4rem;
        color: ${props => props.theme.text};
        margin-bottom: 5rem;
    }

    p {
        max-width: 44rem;
        font-size: 1.6rem;
        line-height: 2.56rem;
        margin-left: 12.4rem;
        color: ${props => props.theme.text}
    }

    @media (max-width: 1200px){
        h2, p {
            margin-left: 0;
            width: 90%;
        }

    @media (max-width: 600px){
        h2, p {
            max-width: 100%;
            width: 100%;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 5rem;
        }
    
        p {
            font-size: 1.5rem;
            margin-left: 0;
        }
    }
    
    }
`

export const Services = styled.div``

export const AccordianHeader = styled(motion.div)`
    width: 100%;
    color: ${props => props.theme.red};
    height: 3.2rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.84rem;
    margin: .8rem 0; 

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`

export const AccordianIcon = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: .8rem;

    span {
        width: 1.6rem;
        height: .4rem;
        background: ${props => props.theme.red};
        transition: .1 ease-in-out;
    }
`

export const AccordianContent = styled(motion.div)`
    overflow: hidden;
    padding-left: 4rem;

    span {
        width: 100%;
        margin: .8rem 0;
        font-size: 1.4rem;
        color: ${props => props.theme.text};
        display: block;
        font-weight: 300;

        @media (max-width: 600px) {
        font-size: 1.5rem;
    }
    }
`
