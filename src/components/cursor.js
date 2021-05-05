import React from 'react'
import { Cursor } from '../styles/globalStyles'
import { useGlobalStateContext } from '../context/globalContext'

const CustomCursor = ({ toggleMenu }) => {
    const { cursorType } = useGlobalStateContext()

    const cursor = React.useRef(null);

    const onMouseMove = event => {
        const { clientX, clientY } = event
        cursor.current.style.left = `${clientX}px`;
        cursor.current.style.top = `${clientY}px`;
    }

    React.useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('touchmove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('touchmove', onMouseMove)
        }
    }, [])

    return (
        <>
            <Cursor className={`${!!cursorType ? 'hovered' : ''} ${cursorType} ${toggleMenu ? "nav-open" : ""}`} ref = {cursor} />
        </>
    )
}

export default CustomCursor
