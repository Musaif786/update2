import React from "react";
import "../css/Topbtn.css";

const Topbtn=()=>{

    let Topbtn1 = document.querySelector('.Topbtn');
    window.addEventListener("scroll",function(){
        Topbtn1.style.display = "block";
        

    })
  return(<>
  <div className="Topbtn">

  <button className="btn"><a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
 </button>
  </div>
  </>);
}
export default Topbtn;