import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About, Services, AccordianHeader, AccordianIcon, AccordianContent } from '../../styles/homeStyles'
import { useGlobalStateContext } from '../../context/globalContext'

const accordianIds = [
    {
        id: 0,
        title: "Pre-Production",
        results: [
            "Creative Development",
            "Writing",
            "Storyboards",
            "Art Direction",
            "Creative Direction",
            "Location Scouting",
            "Casting",
        ],
    },
    {
        id: 1,
        title: "Video Production",
        results: [
            "Principle Photography",
            "Production Management",
            "Crew",
            "Dailies",
            "LTO-Archiving",
        ],
    },
    {
        id: 2,
        title: "Post-Production",
        results: [
            "Colour correction",
            "Offline editing",
            "Online editing",
            "VFX",
            "Animation and motion graphics",
            "Closed captioning and subtitles",
            "Descriptive video",
            "Dailies",
            "Quality control",
            "LTO Archiving",
        ],
    },
    {
        id: 3,
        title: "Audio Post-Production",
        results: [
            "We work with some amazing partners who provide:",
            "Sound Design",
            "SFX",
            "Music",
            "Sound Mix",
        ],
    },
]

const HomeAbout = ({ onCursor }) => {
    const [expanded, setExpanded] = React.useState(0)
    const animation = useAnimation()
    const [AboutRef, inView] = useInView({
        triggerOnce: true,
    })

    React.useEffect(() => {
        if (inView) {
            animation.start('visible')
        }
    }, [animation, inView])


    return (
        <HomeAboutSection ref={AboutRef}
            animate={animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 2, ease: [.6, .05, -.01, .9] }
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }
            }}
        >
            <Container>
                <Flex alignTop  column>
                    <About>
                        <h2>
                            Furrow is an integrated, full-service creative studio offering
                            video production, creative development, and post-production
                            services.
                        </h2>
                        <p>
                            Everybody’s got a story. And we don’t stop until we’ve uncovered
                            what makes yours worth telling. Whether it’s working directly with
                            you, an agency partner, or putting the finishing touches on
                            something special, we’re ready to dig in and get our hands
                            dirty—are you?
                        </p>
                    </About>
                    <Services>
                        <h3>Services</h3>
                        {accordianIds.map((details, index) =>
                            <Accordian key={index} details={details} expanded={expanded} setExpanded={setExpanded} onCursor={onCursor} />
                        )}
                    </Services>
                </Flex>
            </Container>
        </HomeAboutSection>
    )
}

const Accordian = ({ details, expanded, setExpanded, onCursor }) => {
    const isOpen = details.id === expanded
    const [hovered, setHovered] = React.useState(false)
    const { currentTheme } = useGlobalStateContext()

    return (
        <>
            <AccordianHeader
                onClick={() => setExpanded(isOpen ? false : details.id)}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                whileHover={{
                    color: currentTheme === 'dark' ? '#fff' : '#000'
                }}
            >
                <AccordianIcon>
                    <motion.span
                        animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
                        transition={{ duration: .2, ease: [.6, .05, -.01, .9] }}
                    ></motion.span>
                    <motion.span
                        animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
                        transition={{ duration: .2, ease: [.6, .05, -.01, .9] }}
                    ></motion.span>
                </AccordianIcon>
                {details.title}
            </AccordianHeader>
            <AccordianContent key='content' animate={{ height: isOpen ? '100%' : '0' }}
                transition={{ duration: .8, ease: [.6, .05, -.01, .9] }}
            >
                {details.results.map((result, index) => (
                    <span key={index}>{result}</span>
                ))}
            </AccordianContent>
        </>
    )
}

export default HomeAbout

