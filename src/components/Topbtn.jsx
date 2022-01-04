import React from "react";
import "../css/Topbtn.css";

const Topbtn=()=>{

    // let Topbtn1 = document.querySelector('.Topbtn');
    // window.addEventListener("scrollY",function(){
    //     Topbtn1.style.display = "block";

    //     if(scrollY > 700){
    //       alert("hi");
    //     }
        

    // })

    window.addEventListener("scroll",function(){
      let Topbtn1 = document.querySelector('.Topbtn');
      function check(){
        var high = window.pageYOffset;
        if(high >= 300){
          Topbtn1.style.display = "block";
        }else{
          Topbtn1.style.display = "none";
        }
      }
      check();

    } )
     
    
  return(<>
  <div className="Topbtn">

  <button className="btn"><a href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
 </button>
  </div>
  </>);
}
export default Topbtn;