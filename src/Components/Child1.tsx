import { FC, useState } from "react";
import Child2 from "./Child2";

interface I_Child1Prop {
    name: string,
    phone: string,
    childernCall: () => void
}

const Child1: FC<I_Child1Prop> = ({ name, phone, childernCall }) => {
    const [counter, setCounter] = useState<number>(0);

    const handelClick = () =>{
        setCounter((pre)=> pre+1); //0+1
        setCounter((pre)=> pre+1); //1+1
        setCounter((pre)=> pre+1);// 2+1
        setCounter((pre)=> pre+1); //3+1
    }
    console.log('child render')

    return <>
        <h2>Child1</h2>
        <div>
            <button onClick={childernCall}>Child 1 div</button>
            <p>name : {name}</p>
            <p>phone: {phone}</p>

            <div>
                <p>Counter : {counter}</p>
                {/* <button onClick={() => setCounter(counter - 1)}>-</button> {counter} <button onClick={() => setCounter(counter + 1)}>+</button> */}
                <button onClick={()=> handelClick()}>Update Count</button>
            </div>
        </div>
    </>
}
export default Child1;