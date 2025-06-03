function Sample3(props) {
    let stud ={
        name:"gayatri",
        age:20,
        city:"wakadi"
    }
    

    return (
        <div style={{border:'2px solid black',padding:'12px',background:'yellow'}}>

            <h1>Sample3</h1>
            {stud.name}-{stud.age}-{stud.city}

        </div>
        
            
    
    )
}
export default Sample3;

