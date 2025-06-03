import React, { useRef } from "react"
function Demo1(props) {
    let myInput=useRef()
    function myMethod(){
        console.log(myInput.current.name)
        console.log(myInput.current.placeholder)
        myInput.current.style.background="red"
        myInput.current.style.color="yellow"

    }

    return (
        <>
          <input type="text"ref={myInput} name="txt_name"placeholder="enter name" />  
          <br /><br />

          <button onClick={myMethod}>click</button>
        </>
    )
}
export default Demo1;
