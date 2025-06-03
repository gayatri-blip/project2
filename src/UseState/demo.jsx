import react,{ useState } from "react";

function Demo(props) {
    let [no1,setno1]= useState(0)
    let [no2,setno2]= useState(0)
    let [res,setres]= useState(0)
    let [city,setCity]= useState("")
    

    function Add (){
        setres (Number(no1)+Number(no2))
    }
    function Sub (){
        setres (Number(no1) - Number(no2))
    }

    

    return (
        <>
          <h1>demo1 component</h1> 
          <hr />
          SelectCity: <select name="" id=""onChange={(e)=>setCity(e.target.value)}>
            <option value="nashik">nashik</option>
            <option value="vaijapur">vaijapur</option>
            <option value="wakadi">wakadi</option>
          </select>
          <br /><br />
          no1: <input type="text"onChange={(e)=>setno1(e.target.value)} />
          <br /><br />
          no2: <input type="text"onChange={(e)=>setno2(e.target.value)} />
          <br /><br />
          Result:{res}
          <br /><br />
          <button onClick={Add}> Add</button>
          <br /><br />
          <button onClick={Sub}>sub</button>
        </>
    )
}
export default Demo;
