import Sample2 from "./Sample2"

  function Sample1(props) {
    let stud ={
        name:"gayatri",
        age:20,
        city:"wakadi"
    }
    

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'skyblue',width:'1600px'}}>

            <h1>Sample1</h1>
            <Sample2 stud={stud}/>

        </div>
        
            
    
    )
}
export default Sample1
