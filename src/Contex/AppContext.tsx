import { FC, ReactNode, createContext } from "react";

interface I_AppContextProp{
    name:string,
    call:()=> void
}

export const AppContext = createContext<I_AppContextProp | null>(null);


 export const AppProvider:FC<{children: ReactNode}> = ({children})=>{

    const name = "Jayesh";

    const call = ()=>{
        alert('Context Call');
    }

    return<>
        <AppContext.Provider value={{name,call}}>
            {children}
        </AppContext.Provider>

    </>
 }
