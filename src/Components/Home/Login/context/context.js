import React, { createContext, useContext,  } from "react";
import {useHistory} from 'react-router-dom'
const AppContext = createContext();

const AppProvider = (props) => {
       
        const Brandnam = "Kenteguy"
        let history = useHistory();
    function goTo(path){
        history.push(path)
    }
    
    return (

        <AppContext.Provider value = {{Brandnam,goTo, }}>
            { props.children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export  {
    AppProvider,
    useAppContext
}
