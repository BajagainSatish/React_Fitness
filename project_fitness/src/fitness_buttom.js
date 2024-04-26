import Buttom from "./changingbtn.js";
import dumpbell from "./images/dumbell.mp4"
import icon from "./images/FITNESS ICON.jpg"
function Fitness() {
    return (
      <div className="fitness_body_cover">

      <div className="fitness_body">
        <div className="text_part">
          <div >
            <img className="body_icon" src={icon} alt="" />
          </div>
          <div className="heading">
              this is heading
          </div>
          <div className="heading_body">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, in minus illo, ducimus facere numquam ut repudiandae harum omnis minima aliquam laboriosam maiores culpa consectetur at quam dolorum, rem odit.
          </div>
        </div>
        <div className="video">

          <video className="fit_video" width="640"  controls>
          <source src={dumpbell} type="video/mp4"/>
          </video>
          </div>
      </div>
      <Buttom/>
      </div>
    );
  }
  
  export default Fitness;