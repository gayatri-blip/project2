/* import React , { useMemo, useState } from "react"

function Demo(props) {
    let [count,setCount]=useState(0)
    let Show= useMemo(()=>{
        console.log("re-render")
        console.log("useMemo function memoized this show")
            let a=100+200
            return(
                a
            )

        
    },[])

    

    return (
        <>
         <h1>{count}</h1>
         computed value:{Show}
         <br /> <br />
         <button onClick={()=>setCount(count+1)}>Click1</button>
        </>
    )
}
export default Demo
*/





/*import React , { useCallback, useEffect, useMemo, useState } from "react"

function Demo(props) {
    let [count,setCount]=useState(0)
    let Show= useCallback(()=>{
        console.log("re-render")
        console.log("usecallback function memoized this show")

        
    },[])

    return (
        <>
         <h1>{count}</h1>
         
         
         <button onClick={()=>setCount(count+1)}>Click1</button>
          <button onClick={Show}>click2</button>
        </>
    )
}
export default Demo
*/



import React , { useCallback, useEffect, useMemo, useState } from "react"
let Show= React.memo(()=>{
        console.log("re-render")
        console.log("usereact memo function memoized this show")
        return(
            <h1>
                hello world
            </h1>
        )

        
    })


function Demo(props) {
    let [count,setCount]=useState(0)
    
    return (
        <>
         <h1>{count}</h1>
         
         
         <button onClick={()=>setCount(count+1)}>Click1</button>
          {/* <button onClick={Show}>click2</button> */}
          <Show/>
        </>
    )
}
export default Demo















