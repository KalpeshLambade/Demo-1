import { useCallback, useMemo, useState } from "react";
import { AppProvider } from "../Contex/AppContext";
import Child1 from "./Child1";

const ParentComp = () => {
    const [count, setCount] = useState<number>(0);

    const cal = useMemo(()=> expensiveCal(count),[count]);
    // const cal =  expensiveCal(count);


    const [add, setAdd] = useState<number>(0)

    const childernCall = () => {
        setCount((pre)=> pre+1 )
    }

    console.log('Parent render')


    return <>
        <AppProvider>
            <h1>ParentComp: {cal}</h1>
            <div>
                <p>Parent Div</p>
                <Child1 name={'Kalpesh'} phone={'9876456783'} childernCall={childernCall} />
            </div>
            {add}
            <button onClick={()=> setAdd((pre)=> pre+1)}>Click</button>
        </AppProvider>

    </>
}
export default ParentComp;

const expensiveCal = (num:number)=>{
    for(let i=0 ; i<1000000000; i++){
        num++;
    }
    return num;
}
