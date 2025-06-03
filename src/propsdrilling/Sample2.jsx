import Sample3 from "./sample3"

function Sample2(props) {
    let stud ={
        name:"gayatri",
        age:20,
        city:"wakadi"
    }
    

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'pink'}}>

            <h1>Sample2</h1>
            {stud.name} -{stud.age} -{stud.city}
            <Sample3 stud={stud}/>

        </div>
        
            
    
    )
}
export default Sample2
