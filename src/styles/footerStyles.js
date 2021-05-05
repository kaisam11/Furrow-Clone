import styled, { css } from 'styled-components/macro'
import { motion } from 'framer-motion'


export const FooterNav = styled.div`
    height: 15rem;
    margin-top: 29.6rem;

    @media (max-width: 900px) {
        margin-top: 20rem;
        height: 30rem;
    }
`

export const FooterContent = styled.div`
    color: ${props => props.theme.red};
    font-weight: 600;
    font-size: 2rem;
    line-height: .8rem;
    flex: 1;

    p {
        margin: 1.5rem 0;
    }

    ${props =>
        props.wider && css`
            flex: 2;
        `
    }
`

export const FooterSocial = styled.div`
    display: flex;
    position: relative;

    a {
        position: relative;
        display: block;
        height: 2.4rem;
        width: 2.4rem;
        padding: .8rem;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`