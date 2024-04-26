import React from "react";
import Fitness from "./fitness.js";
import FitnessDown from "./fitness_buttom.js";
// import FitnessBtn from "./changingbtn.js";
import imageSrc from "./images/level.png";
import searchicon from "./images/search.jpg";


function App() {
  return (
    <div className="App">
      <Fitness
        image={imageSrc}
        search={searchicon}
      />
      <FitnessDown/>
      {/* <FitnessBtn/> */}
      
    </div>
  );
}

export default App;
