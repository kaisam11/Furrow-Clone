import React, { useState, useEffect } from 'react'

const isBrowser = typeof window !== "undefined"

export const useWindowSize = () => {

    const getSize = () => {
        return {
            width: isBrowser? window.innerWidth : 0,
            height: isBrowser? window.innerHeight : 0
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {

        const handleResize = () => {
            setWindowSize(getSize())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    },[])

    return windowSize
}



export default useWindowSize