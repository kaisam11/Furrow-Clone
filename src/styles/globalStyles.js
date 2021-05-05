import styled, { css } from 'styled-components/macro'


export const Container = styled.div`
    flex-grow: 1;
    position: relative;
    margin: 0 auto;
    padding: 0 3.2rem;
    width: auto;
    height: 100%;

    @media (min-width: 1024px) {
        max-width: 960px
    }

    @media (min-width: 1216px) {
        max-width: 1152px
    }

    @media (min-width: 1408px) {
        max-width: 1244px
    }

    ${props => props.fluid && css`

        @media (max-width: 650px) {
            padding: 0;
            margin: 0;
            max-width: 100%; }
    `}
`

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    ${props => props.flexEnd && css`
        justify-content: flex-end;
    `} 

    ${props => props.alignTop && css`
        align-items: flex-start;
    `} 

    ${props => props.flexStart && css`
        justify-content: flex-start;
    `} 

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `} 

    ${props => props.noHeight && css`
        height: 0;
    `} 

    ${props => props.column && css`
        @media (max-width: 900px) {
            flex-direction: column;
            align-items: end;
        }
    `} 
`

export const Cursor = styled.div`
    position: fixed;
    top: 400px;
    left: 400px;
    width: 32px;
    height: 32px;
    background: ${props => props.theme.red};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all .1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 10000;

    &.hovered {
        background: transparent !important;
        width: 56px;
        height: 56px;
        border: 4px solid ${props => props.theme.red}
    }

    &.pointer {
        border: 4px solid ${props => props.theme.text};
        background: transparent !important;
    }

    &.locked {
        background: transparent !important;;
        width: 56px;
        height: 56px;
        border: 4px solid ${props => props.theme.red};
        top: ${props => props.theme.top} !important;
        left: ${props => props.theme.left} !important;
    }

    &.nav-open {
        background: ${props => props.theme.text};
    }
`
