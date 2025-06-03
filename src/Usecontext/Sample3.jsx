import { createContext, useContext } from "react";
import {myContext} from './Sample1';
function Sample3 (props) {
    let stud= useContext (myContext)
    return (
        <>
        <myContext.Provider value={stud}>
<div style={{border:'2px solid black',padding:'15px',background:'pink'}}>
    <h1>Sample3</h1>
    {stud.name}


</div>
        </myContext.Provider>
            
        </>
    )
}
export default Sample3;
