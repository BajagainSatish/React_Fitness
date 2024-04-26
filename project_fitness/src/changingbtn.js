import {useState} from "react";
function Btn() {
    
    const[value1,setValue1]=useState("white");
    const[value2,setValue2]=useState("white");
    const[value3,setValue3]=useState("white");
    const[value4,setValue4]=useState("white");
    let func1=()=>{
        setValue1("lightgreen")
        setValue2("white")
        setValue3("white")
        setValue4("white")
    };
    let func2=()=>{
        setValue2("lightgreen")
        setValue1("white")
        setValue3("white")
        setValue4("white")
    };
    let func3=()=>{
        setValue3("lightgreen")
        setValue2("white")
        setValue1("white")
        setValue4("white")
    };
    let func4=()=>{
        setValue4("lightgreen")
        setValue2("white")
        setValue3("white")
        setValue1("white")
    };
    return (
      <div className="button_fitness">
        <button  style={{backgroundColor: value1}} className="button_change" onClick={func1}><h2>HANDS</h2></button>
        <button  style={{backgroundColor: value2}} className="button_change" onClick={func2}><h2>LEGS</h2></button>
        <button  style={{backgroundColor: value3}} className="button_change" onClick={func3}><h2>FRONT</h2></button>
        <button  style={{backgroundColor: value4}} className="button_change" onClick={func4}><h2>BACK</h2></button>
        
      </div>
    );
  }
  
  export default Btn;



  