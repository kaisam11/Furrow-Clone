import React from 'react'
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'

import {GlobalProvider} from './src/context/globalContext'

export const wrapRootElement = ({element}) => {
    return (
        <GlobalProvider>
            {element}
        </GlobalProvider>
    )
}