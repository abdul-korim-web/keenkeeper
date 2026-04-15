import React, { createContext, useState } from 'react';
export const inVoicecontext = createContext()
const InvoiceContextProvider = ({children}) => {
    const [inVoice,setInVoice] = useState([])
    return (
        <inVoicecontext.Provider value={{inVoice,setInVoice}}>
            {children}
        </inVoicecontext.Provider>
    );
}

export default InvoiceContextProvider;
