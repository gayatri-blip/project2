import { useMemo, useState } from "react"

function Demo(props) {

    let [count,setCount]=useState(0);
    let sum = useMemo(()=>{
        console.log('re-render')
        let res =0;
        for(let i=0;i<=10;i++)
        {
            res += i;
        }
        return res;

    },[])
    

    return (
        <>
          <div>
            {sum}
            <h1>{count}</h1>
            
            
            <button onClick={()=>setCount(count+1)}>Click</button>
            </div>  
        </>
    )
}
export default Demo;
