import { FC } from "react";
import Child3 from "./Context/Child3";

interface I_Child2Prop{
    name: string,
    phone:string
}

const Child2:FC<I_Child2Prop> = ({name,phone})=> {
    return<>
    <h2>Child2</h2>
    <div>
        <p>Child 2 div</p>
        <p>name : {name}</p>
        <p>phone: {phone}</p>
    </div>
    <Child3/>
    </>
}
export default Child2;

