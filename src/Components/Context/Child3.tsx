import { useContext } from "react";
import { AppContext } from "../../Contex/AppContext";


const Child3 = ()=> {
    // const context = useContext(AppContext)

    // if(!context){
    //     return <>
    //         <div>Error: Context not found</div>
    //     </>
    // }
    // // const {name ,call}    = useContext(AppContext)     
    //  const {name ,call}    = context       

     const {name ,call}    = useContext(AppContext)!     


    return<>
    <h2>Child3</h2>
    <div>
        <p onClick={call}>Child 3 div</p>
        <p>name : {name}</p>
    </div>
    </>
}
export default Child3;

