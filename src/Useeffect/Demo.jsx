import React, { useEffect,useState } from "react"

// function Demo(props) {
//     let [count,setCount]= useState(0)
//     let [name,setName]= useState("")

    // useEffect(()=>{
    //     console.log("component are update")
    // },[])
    //update only once

    // useEffect(()=>{
    //     console.log("component are update")

    // },[count])

//    } 


function Demo(props) {
    let [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("component are rerender")
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    },[])

    return (
        <>
        <h1>I have render {count} times!</h1>
            
                
                    
                </>
            
        
            
        
    )
}
export default Demo;



