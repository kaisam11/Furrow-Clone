import React, { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                currentTheme: action.theme,
            }
        }

        case 'CURSOR_TYPE': {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }

        default: {
            throw new Error('Unknown action')
        }
    }
}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: 'dark',
        cursorType: false,
        cursorStyle: ['pointer', 'hovered', 'locked']
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext) || {
    currentTheme: 'dark',
    cursorType: false,
    cursorStyle: ['pointer', 'hovered', 'locked']
}
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)