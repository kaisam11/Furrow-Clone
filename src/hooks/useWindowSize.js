import React, { useState, useEffect } from 'react'

const isBrowser = typeof window !== "undefined"

export const useWindowSize = () => {

    const getSize = () => {
        return {
            width: isBrowser ? window.innerWidth : 1920,
            height: isBrowser ? window.innerHeight : 1080
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {

        const handleResize = () => setTimeout(() => {
            setWindowSize(getSize())
        }, 1000)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}



export default useWindowSize