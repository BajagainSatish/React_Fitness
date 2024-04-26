import React from "react";

function Fitness(props) {
  return (
    <div className="top_table">
    <div className="top_img">
      <img src={props.image} alt="" className="image"/>
      <h2 className="page_name">FITNESS GURU</h2>
    </div>
    <div className="top_bar">
        <li>HOME</li>
        
    </div>
    <div className="top_bar">
        <li>ABOUT</li>
      
    </div>
    <div className="top_bar">
        <li><>LEARN</></li>

    </div>
    <div className="top_bar">
        <li><>PROGRAM</></li>

    </div>
    <div className="top_bar">
        <li><>RESOURCE</></li>

    </div>
    <div className="search">
        <input type="text" placeholder="Search..." />
        <button>
         search
        </button>
    </div>
    <div className="signup">
        <button className="butn">signup</button>
    </div>

   
  </div>
  );
}

export default Fitness;
