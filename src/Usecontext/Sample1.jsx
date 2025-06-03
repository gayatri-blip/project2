import { createContext } from "react";
import Sample3 from "./Sample3";

export let myContext=createContext();
function Sample1 (props) {
    let stud={
        name:'Gayatri',
        age:20,
        city:'Wakadi'
    }
    

    return (
        <>
        <myContext.Provider value={stud}>
<div style={{border:'2px solid black',padding:'15px', background:'skyblue'}}>
    <h1>Sample1</h1>
    {stud.name}
    <Sample3/>



</div>
        </myContext.Provider>
            
        </>
    )
}
export default Sample1;
